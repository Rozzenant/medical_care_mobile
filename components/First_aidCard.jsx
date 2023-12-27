import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function First_aid_Card({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('First_aid', { id: props.First_aid_ID });
    };

    const Url = props.Image_URL.replace('http://127.0.0.1', 'http://192.168.3.2');

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: Url}}
                resizeMode='contain'
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.First_aid_Name}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.Price} $</Text>
                </View>
            </View>
            <Button title='Посмотреть' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { 
        height: 320, 
        alignSelf: 'stretch', 
        objectFit: 'scale-down', 
        marginTop: -50,
        width: '100%',
    },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
    brandTitle: { color: '#4287f5', fontSize: 32, textAlign: 'center' },
    text: { fontSize: 32, textAlign: 'center', color: 'green' },
});