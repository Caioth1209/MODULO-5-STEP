import { StyleSheet } from "react-native";

export default StyleSheet.create({
    buttonContainer:{
        width: "100%",
        backgroundColor: "#474747",
        margin: "5%",
        padding: "5%",
        borderRadius: "4%",
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    boxImg:{
        flex: 1,
        width: "100%",
    },
    img:{
        width: 120,
        height: 120,
    },
    boxInfo:{
        flex: 1,
        width: "100%",
    },
    textInfo:{
        marginTop: 5,
        fontSize: 12,
        fontWeight: "bold",
        color: "white"
    },
})