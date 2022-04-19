import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import {useDispatch} from 'react-redux';
import { userLogOut } from '../store/auth/userAction';

const AccountScreen =()=> {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(userLogOut())
  },[])
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  )
}


export default AccountScreen;