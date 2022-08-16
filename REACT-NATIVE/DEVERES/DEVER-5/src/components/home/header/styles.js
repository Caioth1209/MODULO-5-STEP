import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1.5/6,
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        backgroundColor: "white",
        marginTop: 10,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomWidth: 1,
        borderBottomColor: "grey",

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
        fontSize: 11,
        fontWeight: "bold",
    },
    buttonAdd:{
        width: "50%",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
    },
    textButton:{
        color: "white",
        fontWeight: "bold",
    }

})