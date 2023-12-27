import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import First_aidScreen from './screens/First_aidScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Shop' component={ShopScreen} options={{ headerTitle: 'Медицинские услуги' }}/>
                    <Stack.Screen name='First_aid' component={First_aidScreen} options={{ headerTitle: 'Медицинская помощь' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}