// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "../pages/home"
// import User from "../pages/user"


// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="User" component={User} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/home"
import User from "../pages/user"
import Login from "../pages/login"
import CreateUser from "../pages/CreateUser"
import ResetPassword from "../pages/resetPassword"
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />   
     <AuthStack.Screen
      name="resetPassword"
      component={ResetPassword}
      options={{ headerShown: false }}
    /> 
     <AuthStack.Screen
      name="CreateUser"
      component={CreateUser}
      options={{ headerShown: false }}
    /> 
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        }  
        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{}}
  >
    <Tabs.Screen name="Home"  component={Home} />  
  </Tabs.Navigator>
); 

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">   
    {false ? (       
      <RootStack.Screen
        name="App"
        component={TabsScreen}       
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  return (
     <NavigationContainer>
      <RootStackScreen />    
     </NavigationContainer>
  );
}