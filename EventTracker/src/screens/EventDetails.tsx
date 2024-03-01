import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { EventList } from '../interfaces/EventList';

import { useDispatch, useSelector } from 'react-redux';

import {addTrackerEvent} from '../store/selectedTrackerSlice'

const EventDetails = ({route}): JSX.Element => {
    const eventInfo: EventList = route.params.item;
    const dispatch = useDispatch();

    const handleAddEvents = () => {
        console.log('selectedEvents::::', eventInfo);
        dispatch(addTrackerEvent({eventInfo}));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{height: 200, width: '95%', borderWidth: 1, margin: 8}}>
                <Text></Text>
            </View>
            <Text>{eventInfo.eventName}</Text>
            <Text>{eventInfo.location}</Text>
            <Text>{eventInfo.entryFee}</Text>
            <Button title='Track this Event'  onPress={handleAddEvents}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
export default EventDetails;