import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native'
import { Formik } from 'formik'
import styles from './styles'
import * as yup from 'yup'
import { AuthContext } from '../../routes/context'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('O email nao é válido')
    .required('É necessário um email válido'),
  password: yup
    .string()
    .min(6, ({ min }) => `A senha deve conter pelo menos ${min} caractres`)
    .required('É necessário uma senha válida!'),
})

export default function App({ navigation }) {
  const { signIn } = React.useContext(AuthContext);

  function loginUserInNodeApi(values) {

    var myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")

    var raw = JSON.stringify({
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

    fetch("http://localhost:8080/loginUser", requestOption)
      .then((response) => { return response.json() })
      .then((response) => { console.log(response); })
      .then((response) => { signIn() })
      .catch((error) => { console.log(error); })

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <Formik
        style={{}}
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={
          {
            email: "",
            password: "",
          }
        }
        onSubmit={values => loginUserInNodeApi(values)}
      >
        {
          ({ handleChange, handleBlur, errors, values, touched, handleSubmit }) => (
            <>


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

              <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
                <Text style={styles.buttonTitle}>Login</Text>
              </TouchableOpacity>
            </>
          )
        }

      </Formik>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("createUser")}}>
        <Text style={styles.buttonTitle}>Criar usuário</Text>
      </TouchableOpacity>
    </View>
  )
}