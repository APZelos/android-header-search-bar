import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Header Search Bar</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerSearchBarOptions: {}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
