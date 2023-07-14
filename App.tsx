

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import AppNavigation from './src/Navigation/AppNavigation'

function App() {
 return (
   <NativeBaseProvider>
     <SafeAreaView style={{flex: 1}}>
       <AppNavigation />
     </SafeAreaView>
   </NativeBaseProvider>
 );
}

export default App;
