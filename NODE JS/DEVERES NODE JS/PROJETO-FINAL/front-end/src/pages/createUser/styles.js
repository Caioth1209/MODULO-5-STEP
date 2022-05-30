import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
      buttonSubmit: {
        width: 200,
        height: 35,
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: '8%',
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