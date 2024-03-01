import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { EventList } from '../interfaces/EventList';
import { removeTrackerEvent } from '../store/selectedTrackerSlice';

import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";


const SelectedEvents = ({ navigation }): JSX.Element => {
    const selectedEvents: EventList[] = useSelector((state) => state.eventIds);
    console.log('Updated List', selectedEvents);


    useEffect(() => {
        setData(selectedEvents)
    }, [selectedEvents])


    const dispatch = useDispatch();

    const removeEvent = (event) => {
        dispatch(removeTrackerEvent({ event }))
    }

    const [data, setData] = useState(selectedEvents);

    const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
        return (
            <ScaleDecorator>
                    <TouchableOpacity
                        style={[
                            { backgroundColor: isActive ? "red" : item.backgroundColor },
                            styles.listView
                        ]}
                        onLongPress={drag}
                        disabled={isActive}
                        onPress={() => removeEvent(item)}
                    >
                        <Text>{item.eventName}</Text>
                    </TouchableOpacity>
            </ScaleDecorator>
        );
    };
    console.log('After draggable:::', data);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#2F363F', }}>
                List of Selected Events!!!
            </Text>
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
        backgroundColor: '#EAF0F1',

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
    }
});
export default SelectedEvents;