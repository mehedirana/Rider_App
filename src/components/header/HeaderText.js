import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LeftArrow from '../../assets/images/svg/LeftArrow';
import { NotificationIcon } from '../../assets/images/svg/NotificationIcon';
import { COLORS, FONTS } from '../../styles/theme';

const HeaderText = ({ headerText, headerRight, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <LeftArrow color={COLORS.blackSolid} />
                </TouchableOpacity>
                <Text style={[{ color: COLORS.blackSolid, marginLeft: 10 }, FONTS.header4]}>{headerText}</Text>
            </View>
            <Text style={[
                FONTS.inter, { color: COLORS.red }
            ]}>{headerRight ? headerRight : ''}</Text>
        </View>
    );
};

export default HeaderText;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        justifyContent: 'space-between',
        marginTop: 30,
        // paddingHorizontal: 22,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.whitePure,
        alignItems: 'center',
        zIndex: 999
    },
});
