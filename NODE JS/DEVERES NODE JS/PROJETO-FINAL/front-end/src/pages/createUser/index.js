import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native'
import { Formik } from 'formik'
import styles from './styles'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
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
           })
          .catch((error) => { console.log(error); })
  
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.subTitle}>Cadastro de usuário</Text>
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
                        <Text style={styles.titleErros}>Erro ao cadastrar usuário!</Text>
                    ) : 
                    (
                        <Text style={styles.titleSucessos}>Usuário cadastrado com sucesso!</Text>
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
        <Text style={styles.buttonTitle}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}


// import React, { useState } from 'react'
// import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
// import { Formik } from 'formik'
// import styles from './styles'
// import * as yup from 'yup'

// const loginValidationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .required('É necessário um nome valido'),
//   email: yup
//     .string()
//     .email('O email nao é válido')
//     .required('É necessário um email válido'),
//   password: yup
//     .string()
//     .min(6, ({min}) => `A senha deve conter pelo menos ${min} caracteres`)
//     .required('É necessário uma senha válida'),
// })


// export default function App() {
  
//    function createUserInNodeApi(values) {
//       var myHeaders = new Headers()
//       myHeaders.append("Content-type", "application/json")

//       var raw = JSON.stringify({
//         "name": values.name,
//         "email": values.email,
//         "password": values.password
//       })

//       var requestOption = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow',
//         mode: 'cors'
//       }

//       fetch("http://localhost:8080/addUser", requestOption)
//         .then((response) => { return response.json() })
//         .then((response) => { console.log(response); })
//         .catch((error) => { console.log(error); })

//    }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>FRONT-END NODE JS</Text>
//       <Text style={styles.subTitle}>Trabalho final da turma de node js</Text>

//       <Text style={styles.subTitle}>Cadastro de usuario</Text>
//       <Formik
//         style={{}}
//         validateOnMount={true}
//         validationSchema={loginValidationSchema}
//         initialValues={
//           {
//             name: "",
//             email: "",
//             password: "",
//           }
//         }
//         onSubmit={values => createUserInNodeApi(values)}
//       >
//         {
//           ({ handleChange, handleBlur, errors, values, touched, handleSubmit }) => (
//             <View>
//               <TextInput
//                 name="name"
//                 type={"name"}
//                 value={values.name}
//                 onChangeText={handleChange("name")}
//                 onBlur={handleBlur("name")}
//                 style={styles.inputStyle}
//                 placeholder="Digite seu nome"
//               />
//               {(errors.name && touched.name) &&
//                 <Text style={styles.titleErros}>{errors.name}</Text>
//               }

//               <TextInput
//                 name="email"
//                 type={"email"}
//                 value={values.email}
//                 onChangeText={handleChange("email")}
//                 onBlur={handleBlur("email")}
//                 style={styles.inputStyle}
//                 placeholder="Digite seu email"
//               />
//               {(errors.email && touched.email) &&
//                 <Text style={styles.titleErros}>{errors.email}</Text>
//               }

//               <TextInput
//                 name="password"
//                 type={"password"}
//                 value={values.password}
//                 onChangeText={handleChange("password")}
//                 onBlur={handleBlur("password")}
//                 style={styles.inputStyle}
//                 placeholder="Digite sua senha"
//                 secureTextEntry
//               />
//               {(errors.password && touched.password) &&
//                 <Text style={styles.titleErros}>{errors.password}</Text>
//               }

//               {/* <TouchableOpacity style={styles.button} onPress={()=>{handleSubmit}}>
//                 <Text style={styles.buttonTitle}>Cadastrar</Text>
//               </TouchableOpacity> */}
//               <Button style={styles.button} onPress={handleSubmit} title="Cadastrar" />
//             </View>
//           )
//         }

//       </Formik>


//     </View>
//   )
// }