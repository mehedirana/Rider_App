import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';
import { userLogOut } from '../store/auth/userAction';
import { COLORS, FONTS } from '../styles/theme';

const AccountScreen =()=> {
  const {user} = useSelector(e => e.userState);

  const dispatch = useDispatch()


  const handleLogout =()=>{
    dispatch(userLogOut())
  }
  return (
    <View style={{flex:1, marginLeft:30}}>
      <View
        style={{
          marginTop: 29,
          flexDirection: 'row',
          justifyContent: 'space-between',
        
        }}>
        <View
          style={{
            marginTop:40
          }}>
          <Image
            style={{resizeMode: 'contain', height: 65, width: 65,borderRadius: 30,overflow:'visible'}}
            source={{uri: user?.user_data?.image_url}}
          />
          
        </View>
   
      </View>

      <Text style={{marginTop: 14, ...FONTS.header1, color: COLORS.blackSolid}}>
        Hi, {user?.user_data?.fullname}
      </Text>
      <Text style={{marginTop: 4, color: COLORS.black, ...FONTS.bodyMedium}}>
        Let’s deliver the best today!
      </Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={{textDecorationLine:'underline',...FONTS.bodyLarge, color:COLORS.primary, marginTop:100}} >Logout</Text>
      </TouchableOpacity>
    </View>
  )
}


export default AccountScreen;