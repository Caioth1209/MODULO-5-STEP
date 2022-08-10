import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "7%",
        marginBottom: "3%",
        paddingTop: "5%",
        paddingBottom: "5%",
        height: "100%",
    },
    titleInfo:{
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "6%",
        fontSize: 12,
        color: "#848484",
        fontWeight: "bold",
    },
    info:{
        textAlign: "center",
        marginTop: "3%",
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "italic",
        
    }
})