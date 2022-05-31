import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import styles from './styles'
import * as yup from 'yup'

const cadastroValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('É necessário um nome válido'),
  email: yup
    .string()
    .email('O email não é válido')
    .required('É necessário um email válido'),
  password: yup
    .string()
    .min(6, ({min}) => `A senha deve conter pelo menos  ${min} caracteres`)
    .required('É necessário uma senha válida'),
})

export default function App({navigation}) {
    const [cadastrou, setCadastrou] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [apareceMensagem, setApareceMensagem] = useState(false);

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
          .then((res) => {
               if (res.error) {
                   setCadastrou(false);
               } else {
                   setCadastrou(true);
               }
               setMensagem(res.message);
               setApareceMensagem(true);
               setTimeout(() => {
                 setApareceMensagem(false);
               }, 3000);
              
           })
          .catch((error) => { console.log(error); })
  
    }
    return (
      <View style={styles.container}>
        <Text style={styles.subTitle}>Cadastro de usuário</Text>
        <Formik
          style={{}}
          validateOnMount={true}
          validationSchema={cadastroValidationSchema}
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
            <>
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

              {
                  mensagem != "" ? 
                    !cadastrou ? 
                    (
                        <Text style={[styles.titleErros, {display: apareceMensagem ? 'block' : 'none'}]}>{mensagem}</Text>
                    ) : 
                    (
                        <Text style={[styles.titleSucessos, {display: apareceMensagem ? 'block' : 'none'}]}>{mensagem}</Text>
                    )
                    :
                    ""
              }

              <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
                <Text style={styles.buttonTitle}>Cadastrar</Text>
              </TouchableOpacity>
            </>
          )
        }
      </Formik>
      
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Login")}}>
        <Text style={styles.buttonTitle}>Voltar ao login</Text>
      </TouchableOpacity>
    </View>
  )
}
