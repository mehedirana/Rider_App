import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import getDirections from 'react-native-google-maps-directions'

const PlaygroundScreen = ({route}) => {
    const {latitude, longitude} = route.params;

//   const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
// //   const latLng = `${20.555},${90.65323}`;
//   const latLng = `${latitude},${longitude}`;
//   const label = 'Custom Label';
//   const url = Platform.select({
//     ios: `${scheme}${label}@${latLng}`,
//     android: `${scheme}${latLng}(${label})`,
//   });
  

useEffect(()=>{
    const desLat = 23.8075846
    const desLong = 90.4279273
    const url = `https://www.google.com/maps/dir/?api=1&origin=` +
    latitude +
    `,` +
    longitude +
    `&destination=` +
    desLat +
    `,` +
    desLong +
    `&travelmode=driving`
   if(latitude, longitude) Linking.openURL(url);
},[latitude, longitude])




const  handleGetDirections = () => {
    const data = {
       source: {
        latitude: latitude,
        longitude: longitude
      },
      destination: {
        latitude: 23.8075846,
        longitude: 90.4279273
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
            latitude: latitude,
            longitude: longitude
        },
        {
            latitude: 23.8075846,
            longitude: 90.4279273
        }
      ]
    }
 
    getDirections(data)
  }


//   useEffect(()=>{
//    if(latitude && longitude){
//     handleGetDirections()
//    }
//   },[latitude, longitude])

  return (
    <View>
      <Text>PlaygroundScreen</Text>
      <Text>PlaygroundScreen</Text>
      <Text>PlaygroundScreen</Text>
      <Text>PlaygroundScreen</Text>
    </View>
  );
};

export default PlaygroundScreen;
