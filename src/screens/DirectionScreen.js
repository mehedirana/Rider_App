import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HeaderText from '../components/header/HeaderText';
import RNLocation from 'react-native-location';
import MapViewDirections from 'react-native-maps-directions';
import { COLORS } from '../styles/theme';

const DirectionScreen = () => {

    const [latLong, setLatLong] = useState({
        latitude: 23.781634584964543,
        longitude: 90.3752835692889,
        // latitudeDelta: 0.006,
        // longitudeDelta: 0.006
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0121,
    });

    const [currentLocation, setCurrentLocation] = useState({
        latitude: 23.783783783783782,
        longitude: 90.39786368955393
    })

    const handleCurrentLocation = async () => {
        location = await RNLocation.getLatestLocation({ timeout: 100 })
        console.log(location)
        setCurrentLocation(location)
    }

    const isPermitted = async () => {

        let permission = await RNLocation.checkPermission({
            ios: 'whenInUse', // or 'always'
            android: {
                detail: 'coarse' // or 'fine'
            }
        });

        console.log('Permission ->', permission)
        return permission
    }


    const handlePermission = () => {
        RNLocation.configure({
            distanceFilter: 1, // Meters
            desiredAccuracy: {
                ios: 'best',
                android: 'balancedPowerAccuracy',
            },
            // Android only
            androidProvider: 'auto',
            interval: 5000, // Milliseconds
            fastestInterval: 10000, // Milliseconds
            maxWaitTime: 5000, // Milliseconds
        });

        RNLocation.requestPermission({
            ios: 'whenInUse',
            android: {
                detail: 'coarse',
                rationale: {
                    title: 'We need to access your location',
                    message: 'We use your location to show where you are on the map',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            },
        }).then(granted => {
            if (granted) {
                handleCurrentLocation();
            } else {
                ToastAndroid.showWithGravity(
                    'Loction permission is not provided!',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                );
            }
        });
    }


    useEffect(() => {

        if (isPermitted()) {
            handleCurrentLocation()
        } else {
            handlePermission()
        }

    }, []);



    return (
        <View style={styles.container}>
            <HeaderText headerText='Order Details' />
            <MapView
                style={styles.mapStyle}
                provider='google'
                region={latLong}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
            // showsTraffic={true}
            >
                <Marker
                    coordinate={latLong}
                    image={require('../assets/images/LocationMarker.png')}
                />
                <Marker
                    coordinate={currentLocation}
                    image={require('../assets/images/LocationMarker.png')}
                />
                <MapViewDirections
                    origin={currentLocation}
                    destination={latLong}
                    apikey='AIzaSyDXfQuQr_ciw0HzKycjJs_cVOVtrVGaIkI'
                    strokeWidth={5}
                    strokeColor='red'
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 50
        // backgroundColor: 'red'
    },
    mapStyle: {
        flex: 1,

        // height: 600,
        // marginTop: 10
    },
})

export default DirectionScreen;
