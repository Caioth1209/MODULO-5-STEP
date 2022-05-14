import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('É necessário um nome valido'),
  email: yup
    .string()
    .email('O email nao é válido')
    .required('É necessário um email válido'),
  password: yup
    .string()
    .min(6, ({min}) => `A senha deve conter pelo menos ${min} caracteres`)
    .required('É necessário uma senha válida'),
})


export default function App() {
  
   function createUserInNodeApi(values) {
      var myHeaders = new Headers()
      myHeaders.append("Content-type", "application/json")

      var raw = JSON.stringify({
        "name": values.name,
        "email": values.email,
        "password": values.password
      })

      var requestOption = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
      }

      fetch("http://localhost:8080/addUser", requestOption)
        .then((response) => { return response.json() })
        .then((response) => { console.log(response); })
        .catch((error) => { console.log(error); })

   }

   function loginUserInNodeApi(values) {
      var myHeaders = new Headers()
      myHeaders.append("Content-type", "application/json")

      var raw = JSON.stringify({
        "email": values.email,
        "password": values.password,
      })

      var requestOption = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
      }

      fetch("http://localhost:8080/loginUser", requestOption)
        .then((response) => { return response.json() })
        .then((response) => { console.log(response); })
        .catch((error) => { console.log(error); })

   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FRONT-END NODE JS</Text>
      <Text style={styles.subTitle}>Trabalho final da turma de node js</Text>

      <Text style={styles.subTitle}>Cadastro de usuario</Text>
      <Formik
        style={{}}
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={
          {
            name: "",
            email: "",
            password: "",
          }
        }
        onSubmit={values => createUserInNodeApi(values)}
      >
        {
          ({ handleChange, handleBlur, errors, values, touched, handleSubmit }) => (
            <View>
              <TextInput
                name="name"
                type={"name"}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                style={styles.inputStyle}
                placeholder="Digite seu nome"
              />
              {(errors.name && touched.name) &&
                <Text style={styles.titleErros}>{errors.name}</Text>
              }

              <TextInput
                name="email"
                type={"email"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                style={styles.inputStyle}
                placeholder="Digite seu email"
              />
              {(errors.email && touched.email) &&
                <Text style={styles.titleErros}>{errors.email}</Text>
              }

              <TextInput
                name="password"
                type={"password"}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                style={styles.inputStyle}
                placeholder="Digite sua senha"
                secureTextEntry
              />
              {(errors.password && touched.password) &&
                <Text style={styles.titleErros}>{errors.password}</Text>
              }

              {/* <TouchableOpacity style={styles.button} onPress={()=>{handleSubmit}}>
                <Text style={styles.buttonTitle}>Cadastrar</Text>
              </TouchableOpacity> */}
              <Button style={styles.button} onPress={handleSubmit} title="Cadastrar" />
            </View>
          )
        }

      </Formik>

      <Text style={styles.subTitle}>Login de usuario</Text>
      <Formik
        style={{}}
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={
          {
            email: "",
            password: ""
          }
        }
        onSubmit={values => console.log(values)}
      >
        {
          ({ handleChange, handleBlur, errors, values, touched, handleSubmit }) => (
            <View>
              <TextInput
                name="email"
                type={"email"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                style={styles.inputStyle}
                placeholder="Digite seu email"
              />
              {(errors.email && touched.email) &&
                <Text style={styles.titleErros}>{errors.email}</Text>
              }

              <TextInput
                name="password"
                type={"password"}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                style={styles.inputStyle}
                placeholder="Digite sua senha"
                secureTextEntry
              />
              {(errors.password && touched.password) &&
                <Text style={styles.titleErros}>{errors.password}</Text>
              }

              {/* <TouchableOpacity style={styles.button} onPress={()=>{handleSubmit}}>
                <Text style={styles.buttonTitle}>Cadastrar</Text>
              </TouchableOpacity> */}
              <Button style={styles.button} onPress={handleSubmit} title="Procurar" />
            </View>
          )
        }

      </Formik>

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
    marginTop: 8
  },
  titleErros: {
    fontSize: 12,
    color: 'red',
    fontWeight: "600"
  }
})
