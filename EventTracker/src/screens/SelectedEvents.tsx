import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { EventList } from '../interfaces/EventList';
import { removeTrackerEvent } from '../store/selectedTrackerSlice';

import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";


const SelectedEvents = ({ navigation }): JSX.Element => {
    const selectedEvents: EventList[] = useSelector((state) => state.eventIds);

    useEffect(() => {
        setData(selectedEvents)
    }, [selectedEvents])


    const dispatch = useDispatch();

    const removeEvent = (event) => {
        dispatch(removeTrackerEvent({ event }));
        Alert.alert('Event Removed')
    }

    const handleDetailEvent = (item: EventList) =>  {
        navigation.navigate('EventDetails', {item: item});
    }

    const [data, setData] = useState(selectedEvents);

    const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
        return (
            <ScaleDecorator>
                <View style={styles.listView}>
                    <TouchableOpacity
                        style={[
                            { backgroundColor: isActive ? "blue" : item.backgroundColor },
                            {alignItems: 'center'}
                                
                        ]}
                        onLongPress={drag}
                        disabled={isActive}
                        onPress={() => {}}
                    >
                        <Text>{item.eventName}</Text>
                    </TouchableOpacity>
                    <View style={styles.eventContainer}>
                        <TouchableOpacity onPress={() => handleDetailEvent(item)} style={styles.eventButton} >
                            <Text>Event Detail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removeEvent(item)} style={styles.eventButton}>
                            <Text>Remove Event</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>
            </ScaleDecorator>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={{ color: '#2F363F' }}>
                    List of Selected Events!!!
                </Text>
            </View>
            <DraggableFlatList
                data={data}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
    },
    listView: {
        flex: 1,
        height: 70,
        width: '90%',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 8,
        marginTop: 16,
        backgroundColor: '#4BCFFA',

    },
    eventContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 12
    },
    rowItem: {
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    eventButton:{
        backgroundColor: '#3498DB', 
        borderRadius: 5, 
        padding: 4
    }
});
export default SelectedEvents;