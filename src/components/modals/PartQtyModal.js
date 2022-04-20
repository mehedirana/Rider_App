import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import { COLORS, FONTS } from '../../styles/theme';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const PartQtyModal = () => {
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [scrollToIndexForDay, setScrollToIndexForDay] = useState(0);
  const [scrollToIndexForYear, setScrollToIndexForYear] = useState(0);
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [ref, setRef] = useState(null);
  const [refForDay, setRefForDay] = useState(null);
  const [refForYear, setRefForYear] = useState(null);


  const onPressItemForDay = option => {
    props?.setDayValue(option.name);
  };



  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 30;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };



  const scrollHandlerForDay = () => {
    if (
      scrollToIndexForDay != 0 ||
      scrollToIndexForDay != -1 ||
      dataSourceCords != null
    ) {
      refForDay?.scrollTo({
        x: 0,
        y: dataSourceCords[
          scrollToIndexForDay == 0
            ? props?.dayData?.findIndex(el => el.name == props?.dayValue) - 3
            : scrollToIndexForDay - 3
        ],
        animated: true,
      });
    }
  };





  const renderItemForDay = props?.dayData?.map((item, index) => {
    return (
      <>
        <TouchableOpacity
          style={{
            marginVertical: 5,
            borderRadius: 10,
            backgroundColor:
              item?.name === props?.dayValue ? '#E0F6E8' : COLORS.lightGray10,
            paddingVertical: 15,
          }}
          key={() => {
            return (
              new Date().getTime().toString() +
              Math.floor(
                Math.random() * Math.floor(new Date().getTime()),
              ).toString() +
              item?.name +
              item?.id +
              index
            );
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[index] = layout.y;
            setDataSourceCords(dataSourceCords);

            if (index == props?.dayData?.length - 1) {
              scrollHandlerForDay();
            }
          }}
          onPress={() => {
            onPressItemForDay(item);
            setScrollToIndexForDay(index);
          }}>
          <Text
            style={{
              ...FONTS.subtitle2,
              textAlign: 'center',
              fontWeight: '600',
              color:
                item.name === props?.dayValue
                  ? COLORS.blackSolid
                  : COLORS.darkGray,
            }}>
            {item?.name}
          </Text>
        </TouchableOpacity>
        {index == props?.dayData?.length - 1 ? (
          <></>
        ) : (
          <View
            style={{
              borderBottomColor: COLORS.lightGray10,
              borderBottomWidth: 1,
            }}></View>
        )}
      </>
    );
  });


  return (
    <Modal
      statusBarTranslucent
      style={styles.container}
      isVisible={props?.dropdownModal}
      animationInTiming={400}
      animationOutTiming={800}
      swipeDirection="down"
      swipeThreshold={200}
      backdropOpacity={0.8}
      backdropColor={Platform.OS == 'ios' ? '#ccc' : COLORS.black}
      onBackdropPress={() => props?.setDropdownModal(false)}
      onRequestClose={() => props?.setDropdownModal(false)}
      hasBackdrop={!props?.dropdownModal ? false : true}
      onSwipeComplete={() => props?.setDropdownModal(false)}>
      <View style={[styles.modalBackground]}>
        <View style={[styles.activityIndicatorWrapper, styles.shadowProp]}>
          <>
            <View style={styles.headerContainer}>
              <Text
                style={{
                  ...FONTS.header4,
                  textAlign: 'center',
                  fontWeight: '600',
                  color: COLORS.blackSolid,
                }}>
                DOB -
                {props?.dayValue !== '' &&
                  props?.monthValue !== '' &&
                  props?.yearValue !== '' && (
                    <Text
                      style={{
                        ...FONTS.header4,
                        textAlign: 'center',
                        fontWeight: '600',
                        color: COLORS.primary,
                      }}>
                      {' ' +
                        props?.monthData?.filter(
                          el => el?.id == props?.monthValue,
                        )[0]?.name}{' '}
                      {props?.dayValue}, {props?.yearValue}
                    </Text>
                  )}
              </Text>
              <TouchableOpacity
                style={{padding: 20}}
                onPress={() => props?.setDropdownModal(false)}>
                {props?.dayValue !== '' &&
                props?.monthValue !== '' &&
                props?.yearValue !== '' ? (
                  <Text
                    style={{
                      ...FONTS.body,
                      textAlign: 'center',
                      fontWeight: '600',
                      color: COLORS.primary,
                    }}>
                    Save
                  </Text>
                ) : (
                  <Text
                    style={{
                      ...FONTS.body,
                      textAlign: 'center',
                      fontWeight: '600',
                      color: COLORS.red,
                    }}>
                    Cancel
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <ScrollView
                style={{flex: 1, marginHorizontal: 5}}
                showsVerticalScrollIndicator={false}
                ref={ref => {
                  setRefForDay(ref);
                }}>
                {renderItemForDay}
              </ScrollView>
            </View>

            <View
              style={{
                height: 25,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
              }}></View>
          </>
        </View>
      </View>
    </Modal>
  );
};

export default PartQtyModal;

const styles = StyleSheet.create({
  container: {margin: 0, justifyContent: 'flex-end'},
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.whitePure,
    width: WIDTH,
    maxHeight: HEIGHT / 2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  loading: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
