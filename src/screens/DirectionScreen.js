import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HeaderText from '../components/header/HeaderText';
import MapViewDirections from 'react-native-maps-directions';

const DirectionScreen = ({ route, navigation }) => {
    const { latitude, longitude } = route.params
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.0622;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const mapRef = useRef(null)

    const [latLong, setLatLong] = useState({
        latitude: 23.781634584964543,
        longitude: 90.3752835692889,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    return (
        <View style={styles.container}>
            <HeaderText headerText='Order Details' navigation={navigation} />
            <MapView
                style={styles.mapStyle}
                provider='google'
                initialRegion={latLong}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                ref={mapRef}
            >
                <Marker
                    coordinate={latLong}
                    image={require('../assets/images/LocationMarker.png')}
                />
                <Marker
                    coordinate={{ latitude, longitude }}
                    image={require('../assets/images/GmAvatar.png')}
                />
                <MapViewDirections
                    origin={{ latitude, longitude }}
                    destination={latLong}
                    apikey='AIzaSyDXfQuQr_ciw0HzKycjJs_cVOVtrVGaIkI'
                    strokeWidth={4}
                    strokeColor='red'
                    onError={(e) => console.warn('Error: ', e)}
                    onReady={result => {
                        // console.log('distance: ', result)
                        mapRef.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: (width / 20),
                                bottom: (height / 20),
                                left: (width / 20),
                                top: (height / 20),
                                animated: true
                            }
                        })
                    }}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapStyle: {
        flex: 1,

    },
})

export default DirectionScreen;
