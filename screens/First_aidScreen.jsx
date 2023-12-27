import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetfirst_aid, setfirst_aid } from '../store/First_aidSlice';
import { axiosInstance } from '../API';


export default function First_aidScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { first_aid } = useSelector((store) => store.first_aid);
    useEffect(() => {
        async function getOnefirst_aid() {
            await axiosInstance.get(`/first_aid/${id}`).then((response) => dispatch(setfirst_aid(response?.data)));
        }
        getOnefirst_aid();
        return () => {
            dispatch(resetfirst_aid());
        };
    }, [dispatch]);
    
    return (
        <View style={styles.container}>
          <Image 
            source={{ uri: first_aid.Image_URL ? first_aid.Image_URL.replace('http://127.0.0.1', 'http://192.168.3.2') : null }} 
            style={styles.image} 
            resizeMode="contain" 
          />
          <Text style={styles.title}>{first_aid.First_aid_Name}</Text>
          <Text style={styles.description}>{first_aid.Description}</Text>
          <Text style={styles.price}>{`Цена: $${first_aid.Price}`}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        },

        image: {
        width: "100%",
        height: "50%",
        marginBottom: 16,
        },

        title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        },

        description: {
        fontSize: 16,
        marginBottom: 8,
        },
        
        price: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
        },
    });