import{StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    carContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"black"
    },
    header:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    headerTitle:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    icon:{
        color:"white"
    },
    bgImage:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
    },
    batterySection:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    batteryImage:{
        width:70,
        height:26,
    },
    batteryText:{
        color:"white",
        fontSize:30,
        marginLeft:10
    },
    status:{
        alignItems:"center"
    },
    parkText:{
        color:"white",
        fontSize:23,
        marginTop:5
    },
    controllers:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:120,
    },
    controllersButton:{
        borderColor:"white",
        borderWidth:1,
        padding: 15,
        borderRadius:50

    }
    
})

export default styles