// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
     const { textStyle, viewStyle } = styles;
     return (
     <View style={viewStyle} >
        <Text style={textStyle}> {props.headerText} </Text>
     </View>
     );
};
const styles = {
    viewStyle: { 
        backgroundColor: '#f8f811',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 80,
        padding: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative' 
    },
    textStyle: {
         fontSize: 20
    }
};

// Make the component available to other parts of the app
export default Header;
