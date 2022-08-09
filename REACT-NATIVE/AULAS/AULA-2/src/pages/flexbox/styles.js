import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    box1:{
        // flex: 1,
        flexDirection: "row",
        width: "90%",
        height: 200,
        backgroundColor: "red",
        // margin: 10,
    },
    boxInterno:{
        backgroundColor: "blue",
        margin: 5,
        height: 40,
    },
    box2:{
        flex: 5,
        width: "90%",
        height: 200,
        backgroundColor: "black",
        // margin: 10,
    },
    box3:{
        flex: 1,
        width: "90%",
        height: 200,
        backgroundColor: "pink",
        // margin: 10,
    },
    // box4:{
    //     flex: 1,
    //     width: 200,
    //     height: 200,
    //     backgroundColor: "blue",
    //     // margin: 10,
    // },
})