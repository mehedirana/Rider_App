import React from 'react'
import HomeIcon from '../../assets/images/svg/bottom-tab-bar/HomeIcon';
import FABIcon from '../../assets/images/svg/bottom-tab-bar/FABIcon';
import AccountIcon from '../../assets/images/svg/bottom-tab-bar/AccountIcon';
import { COLORS } from '../../styles/theme';


const TabCustomIcon =({route, focused, color, size})=> {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? 'home1' : 'home2';
      return (
        <>
          {iconName === 'home1' ? (
            <HomeIcon color={COLORS.primary} />
          ) : (
            <HomeIcon color={COLORS.gray50} />
          )}
        </>
      );
    } else if (route.name === 'NewOrder') {
      iconName = focused ? 'shopping' : 'shopping1';
      return (
        <>
          {iconName === 'shopping' ? (
            <FABIcon color={COLORS.primary} />
          ) : (
            <FABIcon color={COLORS.gray50} />
          )}
        </>
      );
    } else if (route.name === 'Account') {
      iconName = focused ? 'cat1' : 'cat2';
  
      return (
        <>
          {iconName === 'cat1' ? (
            
            <AccountIcon color={COLORS.primary} />
          ) : (
            <AccountIcon color={COLORS.gray50} />
          )}
        </>
      );
    } 
}

export default TabCustomIcon