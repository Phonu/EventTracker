import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView , TouchableOpacity, Alert} from 'react-native';
import { EventList } from '../interfaces/EventList';

import { useDispatch, useSelector } from 'react-redux';

import {addTrackerEvent} from '../store/selectedTrackerSlice'

const EventDetails = ({route}): JSX.Element => {
    const eventInfo: EventList = route.params.item;
    const dispatch = useDispatch();

    const handleAddEvents = () => {
        dispatch(addTrackerEvent({eventInfo}));
        Alert.alert('Event Successfully Added','Please check the list of tracked events in My Event')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: 200, width: '95%', borderWidth: 1, margin: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4BCFFA', borderRadius: 30}}>
                <Text style={{fontSize: 32}}>{eventInfo.eventName}</Text>
            </View>
            <View style={{margin: 12}}>
                <Text style={styles.subTitle}>{`location:   ${eventInfo.location}`}</Text>
                <Text style={styles.subTitle}>{`Service:     ${eventInfo.subscription}`}</Text>
                <Text style={styles.subTitle}>{`Entry Fee:  ${eventInfo.entryFee}`}</Text>
            </View>

            <TouchableOpacity onPress={handleAddEvents} style={{backgroundColor:'#3498DB', height: 40, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{'Track this Event'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      subTitle: {
        fontSize: 16,
      }

});
export default EventDetails;