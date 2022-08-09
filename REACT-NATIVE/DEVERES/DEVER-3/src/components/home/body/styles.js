import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 2/6,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "white",
    },
    boxSaldo:{
        borderWidth: 3,
        borderColor: "#463f3a",
        borderRadius: 30,
        padding: 30
    },
    saldoTitulo:{
        fontWeight: "bold",
        fontSize: 17,
    },
    saldoDinheiro:{
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center"
    }

})