import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1/6,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        backgroundColor: "white",
        marginTop: 20,
        marginBottom: 10,
    },
    boxImg:{
        flex: 1,
        width: "100%",
    },
    img:{
        width: 120,
        height: 120
    },
    boxInfo:{
        flex: 1,
        width: "100%",
    },
    textInfo:{
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
    }
})