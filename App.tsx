import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  LoginScreen from './telas/login';
import  CadastroUsuario from './telas/cadastro_cliente';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
    <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Tab = createBottomTabNavigator();

function HomeScreen() {
  return(
    <View>
      <Text>
        Hello world!
      </Text>
    </View>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Screen" component={HomeScreen} />
      <Tab.Screen name="Login Screen" component={LoginScreen} />
      <Tab.Screen name="Cadastro cliente Screen" component={CadastroUsuario} />
      
    </Tab.Navigator>
  );
}