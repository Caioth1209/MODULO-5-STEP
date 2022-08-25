import React, {useState}from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../signIn';
import Recovery from '../recoveryPassword';

const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

function SplashScreen() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

function HomeScreen() {

    const {signOut} = React.useContext(AuthContext);

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

function SignInScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = React.useContext(AuthContext);

    function login(username, password) {
        
        if (username == "Alan" && password == "12345") {
            signIn(username, password)
        } else {
            alert("Dados invalidos")
        }
    }

    return (
        <View>
            <TextInput
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            />

            <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntrys
            />  

            <Button
            title="Logar"
            onPress={()=>{login(username, password)}}
            />
        </View>
    )
}

export default function App(){

    // funcao que vai guardar os casos
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "RESTORE_TOKEN":{
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false
                    };
                }
            
                case "SIGN_IN":{
                    return {
                        ...prevState,
                        userToken: action.token,
                        isSignOut: false
                    };
                }

                case "SIGN_OUT":{
                    return {
                        ...prevState,
                        userToken: action.token,
                        isSignOut: true
                    };
                }
            }
        },{
            isLoading: true,
            isSignOut: false,
            userToken: null
        }
    );

    // memoriza funcoes
    const authContext = React.useMemo(() => ({
        signIn: async () => {
            dispatch({
                type: "SIGN_IN",
                token: "12345"
            })
        },
        signOut: async () => {
            dispatch({
                type: "SIGN_OUT",
                token: "12345"
            })
        },
        // restoreToken:{}
    }),[])

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        // state.isLoading 
                        false
                        ?
                        <Stack.Screen name="Splash"  component={SplashScreen}/> 
                        :
                        state.userToken == null 
                        ?
                        <Stack.Screen name="SignIn"  component={SignInScreen}/> 
                        :
                        <Stack.Screen name="Home"  component={HomeScreen}/> 
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}