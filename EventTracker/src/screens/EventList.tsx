import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EventList = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Text>
                List of Events!!!
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default EventList;