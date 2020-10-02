import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import questions from './Util/questions.json';

const QuestionView = ({goBack, fraction}) => {
    
    let question = 'Напасть ли вашей армии на соседнее поселение?';
    console.log('page is: ' + fraction);
    
    switch(fraction) {
        case 'army':
            let id = Math.floor(Math.random() * Math.floor(3));
            console.log('Id is: ' + id);
            question = questions.army[id];
            break;
        case 'gods':
            question = questions.gods[Math.floor(Math.random() * Math.floor(3))];
            break;
    }
    console.log('question: ' + question);
    
    
    return (
        <View>
            <Text style={styles.textStyle}>{question}</Text>
            <Button
              title='Yes'
              onPress={goBack}
            />
            <Button
              title='No'
              onPress={goBack}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    paddingBottom: 10
}
});

export default QuestionView;