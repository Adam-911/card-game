import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FractionsView from './src/FractionsView';
import Header from './src/Header';
import QuestionView from './src/QuestionView';
import { Provider } from 'react-redux';

export default function App() {
  
  const [page, setPage] = useState('Fractions');

  let content = <FractionsView onOpen={(name) => {setPage(name)}}/>

  if (page !== 'Fractions') {
    console.log('page in If is:' + page);
    
    content = <QuestionView 
                goBack={() => {setPage('Fractions')}}
                fraction={page}
              />
  }

  return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.container}>
          {content}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f2e',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
