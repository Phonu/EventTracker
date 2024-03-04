import React from 'react';
import { Text, StyleSheet, TextInput, Button, SafeAreaView, Alert } from 'react-native';

const Dashboard = ({navigation}): JSX.Element => {
    const [value, onChangeValue] = React.useState('');

    const handleOnPress = () => {
        if (value.length) {
            navigation.navigate('EventList');
        } else {
            Alert.alert('Alert', 'Please enter your name');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:24, marginBottom: 45}}>
                Welcome to Event Tracker App!!!
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeValue}
                value={value}
                placeholder="Please enter your name"
            />
            <Button title="Explore Events" onPress={handleOnPress}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '60%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
export default Dashboard;