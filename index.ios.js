//IOS

// import a library to create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// create a component
const App = () => (
    <Text>Some Text</Text>
);

// render it to device
AppRegistry.registerComponent('albums', () => App);
