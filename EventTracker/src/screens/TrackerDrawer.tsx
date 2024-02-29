import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { EventList } from '../interfaces/EventList';
import { removeTrackerEvent } from '../store/selectedTrackerSlice';

import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";



const TrackerDrawer = ({ navigation }): JSX.Element => {

    // const selectedEvents = useSelector((state) =>  console.log('ddd', state.ids));
    const selectedEvents: EventList[] = useSelector((state) => state.ids);

    console.log('list of eventList111', selectedEvents)

    const dispatch = useDispatch();

    const removeEvent = (event) => {
        dispatch(removeTrackerEvent({ event }))
    }

    const [data, setData] = useState(selectedEvents);

    useEffect(() => {
        setData(selectedEvents)
    }, [data])


    // const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
    //     return (
    //       <ScaleDecorator>
    //         <TouchableOpacity
    //           onLongPress={drag}
    //           disabled={isActive}
    //           style={[
    //             // styles.rowItem,
    //             { backgroundColor: isActive ? "red" : item.backgroundColor },
    //           ]}
    //         >
    //           <Text style={styles.text}>{item.eventName}</Text>
    //         </TouchableOpacity>
    //       </ScaleDecorator>
    //     );
    //   };

    const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
        return (
            <ScaleDecorator>

                <View style={styles.listView}>
                    <TouchableOpacity
                        // style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
                        style={[
                            { backgroundColor: isActive ? "red" : item.backgroundColor },
                        ]}
                        onLongPress={drag}
                        disabled={isActive}

                    >
                        <Text>{item.eventName}</Text>
                        <View style={{}}>
                            <Button onPress={() => removeEvent(item)} title={'remove'} />
                            {/* <Button onPress={() => navigation.navigate('EventDetails', { item: item })} title={'details'} /> */}
                        </View>

                    </TouchableOpacity>

                </View>

                {/* <TouchableOpacity
              onLongPress={drag}
              disabled={isActive}
              style={[
                // styles.rowItem,
                { backgroundColor: isActive ? "red" : item.backgroundColor },
              ]}
            >
              <Text style={styles.text}>{item.eventName}</Text>
            </TouchableOpacity> */}
            </ScaleDecorator>
        );
    };



    // const renderItem = ({ item }) => {
    //     return (
    //         <View style={styles.listView}>
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
    //                 <Text>{item.eventName}</Text>
    //                 <View style={{ margin: 8 }}>
    //                     <TouchableOpacity onPress={() => removeEvent(item)} style={{ marginBottom: 8 }}>
    //                         <Text style={{ color: 'red' }}>remove</Text>
    //                     </TouchableOpacity>

    //                     <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { item: item })} >
    //                         <Text style={{ color: 'blue' }}>details</Text>
    //                     </TouchableOpacity>
    //                 </View>

    //             </View>

    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#2F363F', }}>
                List of Selected Events!!!
            </Text>

            <DraggableFlatList
                data={selectedEvents}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            {/* <FlatList
                data={selectedEvents}
                renderItem={renderItem}
            /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        margin: 12,
    },
    listView: {
        flex: 1,
        height: 70,
        width: '90%',
        borderRadius: 5,
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 1,
        // shadowRadius: 1,
        // elevation: 1,
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
export default TrackerDrawer;