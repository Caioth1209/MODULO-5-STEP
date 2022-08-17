import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    boxImg:{
        flex: 1,
        width: "100%",
        alignItems: "center",
        marginTop: "5%"
    },
    img:{
        width: 200,
        height: 200,
    },
    boxInfo:{
        flex: 1.5,
        width: "100%",
        alignItems: "center",
    },
    textInfo:{
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
})