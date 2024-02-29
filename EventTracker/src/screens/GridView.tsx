import React from 'react';
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from 'react-native';
import { EventList } from '../interfaces/EventList';

export const EventListData: EventList[] = require("./../data/eventlist.json");

const GridView = ({navigation}): JSX.Element => {

    const renderItem = ({ item }: { item: EventList }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'white'}} onPress={() =>handleOnEventClick(item)}>
                <View style={styles.mainCardView}>
                    <View style={{alignItems: 'center'}}>
                    <Text style={styles.title} >{item.eventName}</Text>

                    </View>
                    <Text style={styles.subTitle}>{`location: ${item.location}`}</Text>
                    <Text style={styles.subTitle}>{`Service:   ${item.subscription}`}</Text>
                    <Text style={styles.subTitle}>{`Entry Fee: ${item.entryFee}`}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleOnEventClick = (item: EventList) => {
        console.log('event data ....', item);
        navigation.navigate('EventDetails', {item: item});
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={EventListData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DAE0E2',
    },
    mainCardView: {
        height: 120,
        width: 180,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        // flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 14,
        margin: 8,
        borderColor: '#4834DF',
        backgroundColor: '#EAF0F1',



    },

    title: {
        fontSize: 16,
        color: '#535C68',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        margin: 8
      },
      subTitle: {
        fontSize: 14,
        // color: '#25CCF7',
      }
});
export default GridView;