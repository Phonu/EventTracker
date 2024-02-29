import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { EventList } from '../interfaces/EventList';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const EventListData: EventList[] = require("./../data/eventlist.json");


const ThumbnailView = ({navigation}): JSX.Element => {
    console.log('checking data', EventListData);
    const renderItem = ({ item }: { item: EventList }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: '#EAF0F1'}} onPress={() => handleOnEventClick(item)}>
                <View style={styles.mainCardView}>
                    <View style={{alignItems: 'center'}}>
                    <Text style={styles.title} >{item.eventName}</Text>
                    </View>
                    <Text style={styles.subTitle}>{`location:   ${item.location}`}</Text>
                    <Text style={styles.subTitle}>{`Service:     ${item.subscription}`}</Text>
                    <Text style={styles.subTitle}>{`Entry Fee:  ${item.entryFee}`}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleOnEventClick = (item: EventList ) => {
        console.log('event data ....', item);
        navigation.navigate('EventDetails', {item: item});
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={EventListData}
                keyExtractor={item => item.id}
                renderItem={renderItem} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#DAE0E2',
    },
    mainCardView: {
        height: 160,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#EAF0F1',
        borderRadius: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        // flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 14,
        margin: 12,
        borderColor: '#4834DF'

    },
    title: {
        fontSize: 24,
        color: '#535C68',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        margin: 8
      },
      subTitle: {
        fontSize: 16,
        // color: '#25CCF7',
      }

});
export default ThumbnailView;