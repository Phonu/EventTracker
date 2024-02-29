/** 
 * event image, 
 * event name, 
 * location,
 *  entry type (paid or free) 
 *  a button
that allows the event to be tracked by the user
 */

import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { EventList } from '../interfaces/EventList';

import { useDispatch, useSelector } from 'react-redux';

import {addTrackerEvent} from '../store/selectedTrackerSlice'

const EventDetails = ({route}): JSX.Element => {
    const [number, onChangeNumber] = React.useState('');
    const eventdata: EventList = route.params.item;
    console.log('checking params data',eventdata  );

    const selectedEvents = useSelector((state) => {console.log('stateeeee', console.log('hii', state.ids) )});

    // console.log('hello', selectedEvents);

    const dispatch = useDispatch();
    // console.log('list of eventList', selectedEvents)

    const handleAddEvents = () => {
        console.log('add events')
        console.log('heyyy', eventdata);
        dispatch(addTrackerEvent({eventdata}));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>{eventdata.eventName}</Text>
            <Text>{eventdata.location}</Text>
            <Text>{eventdata.entryFee}</Text>
            <Button title='Track this Event'  onPress={handleAddEvents}/>
            <Button title='get events'  onPress={() => {console.log('12345', selectedEvents)}}/>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
export default EventDetails;