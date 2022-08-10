import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        borderColor: "red",
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        height: 140
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