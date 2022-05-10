import React, {useState} from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Touchable } from 'react-native'

export default function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function createUserInNodeApi() {
      
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        "name": nome,
        "email": email,
        "password": senha,
      });
      var requestOption = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
          mode: "cors"
      };
      fetch("http://localhost:8080/addUser", requestOption)
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FRONT-END NODE JS</Text>
      <Text style={styles.subTitle}>Trabalho final da turma de node js</Text>
      <TextInput
        placeholder="Digite seu nome"
        onChangeText={(val) => {setNome(val)}}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Digite seu email"
        onChangeText={(val) => {setEmail(val)}}
        style={styles.inputStyle}
      />
      <TextInput
        placeholder="Digite sua senha"
        onChangeText={(val) => {setSenha(val)}}
        style={styles.inputStyle}
      />
      <TouchableOpacity style={styles.button} onPress={() => { createUserInNodeApi() }}>
        <Text style={styles.buttonTitle}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    color: 'gray',
    fontWeight: '700',
    marginTop: '10%'
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '700',
    marginTop: '2%'
  },
  inputStyle: {
    width: 200,
    height: 35,
    //backgroundColor:'#0f1b59',
    borderRadius: 10,
    marginTop: 30,
    padding: 10,
    borderColor: '#0f1b59',
    borderWidth: 1
  },
  button: {
    width: 200,
    height: 35,
    backgroundColor: '#0f1b59',
    borderRadius: 10,
    marginTop: '8%',
  },
  buttonTitle: {
    fontSize: 16,
    color: '#f5f5f5',
    fontWeight: '700',
    textAlign: 'center',
    marginTop:8
  }
})