import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../API';
import { setfirst_aids } from '../store/First_aidSlice';
import First_aid_Card from '../components/First_aidCard';

export default function ShopScreen({ navigation }) {
  const dispatch = useDispatch();
  const { first_aids } = useSelector((store) => store.first_aid);



  const [search, setSearch] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const fetchfirst_aids = async () => {
    const Params = {
      search: search,
      from: from,
      to: to,
    };

    try {
      const response = await axiosInstance.get('/first_aid/', {
        params: Params,
      });

      dispatch(setfirst_aids(response?.data));
    } catch (error) {
      console.error('Ошибка при получении услуг:', error);
    }
  };

  useEffect(() => {
    fetchfirst_aids();
  }, [dispatch]);

  const handleSearch = () => {
    fetchfirst_aids();
  };

  const handleClear = () => {
    setSearch('');
    setTo('');
    setFrom('');
  };

  const checkFrom = (text) => {
    if (!isNaN(text)) {
      setFrom(text);
    }
  };

  const checkTo = (text) => {
    if (!isNaN(text)) {
      setTo(text);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Название"
            value={search}
            onChangeText={(text) => setSearch(text.trim())}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="От"
            value={from}
            onChangeText={checkFrom}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="До"
            value={to}
            onChangeText={checkTo}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.searchButton} title="Поиск" onPress={handleSearch} />
          <Button style={styles.clearButton} title="Очистить" onPress={handleClear} />
        </View>
        <View style={styles.page}>
          {first_aids['first_aids'] && first_aids['first_aids'].length > 0 ? (
            first_aids['first_aids'].map((first_aid) => (
              <First_aid_Card key={first_aid.First_aid_ID} {...first_aid} navigation={navigation} />
            ))
          ) : (
            <Text>Товары не найдены</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchButton: {
      marginTop: 10,
    },
    searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      flex: 1,
    },
    searchContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        paddingBottom: 15
      },
      
  });
  