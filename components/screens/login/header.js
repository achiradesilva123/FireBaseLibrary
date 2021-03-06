import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
 
    return(
        <View style={styles.header}>
            <Text style={styles.title}>L i  B r  A r  Y</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        height :80,
        paddingTop :40,
        backgroundColor : 'coral'
    },
    title : {
        textAlign :'center',
        fontSize : 20,
        fontWeight :'bold',
        color :'white' 
    }
})