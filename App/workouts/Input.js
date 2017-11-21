import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RadioButton from '../components/RadioButton';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enable: true,
      questions: [
                    '1. Did You Workout Today?', 
                    '2. How Much Time Did You Sleep Last Night (Excluding Awake Time)?',
                    '3. Sleep Comments',
                    '4. Did You Take Any Prescription or Non Prescription Sleep Aids Last Night?',
                    '5. What % of The Food You Consumed Yesterday Was Unprocessed?',
                    '6. Number of Alcohol Drinks Consumed Yesterday?',
                    '7. Did You Smoke Any Substances Yesterday?',
                    '8. Did You Take Any Prescription or Non Prescription Medications or Supplements Yesterday?',
                    '9. Yesterdays Stress Level',
                    '10. Are You Sick Today?',
                    '11. Weight (Pounds)',
                    '12. Waist Size (Male)',
                    '13. What Type Of Diet Do You Eat?',
                    '14. Did You Stand For 3 Hours or More Yesterday?',
                    '15. General Comments'
                    ],
      index: 0,
    };
  }
  inc() {
    if(this.state.index <20) {
       this.setState({
    index: this.state.index+1
    });
    }
  } 

  Inc() {
    if(this.state.index <20) {
      this.setState({
        index: this.state.index-1
      });
    }
  }
  
  render() {
    return (
      <View>
        
        {this.state.index === 0 && 
          <View style={styles.container} >
            <Text> {this.state.questions[this.state.index]}</Text>
            <RadioButton />
          </View>
        }
        {this.state.index === 1 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 2 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 3 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 4 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
           
          </View>
        }
        {this.state.index === 5 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
           
          </View>
        }
        {this.state.index === 6 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 7 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 8 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 9 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 10 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 11 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
           
          </View>
        }
        {this.state.index === 12 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
           
          </View>
        }
        {this.state.index === 13 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
            
          </View>
        }
        {this.state.index === 14 && 
          <View style={styles.container}>
            <Text> {this.state.questions[this.state.index]}</Text>
           
          </View>
        }
        <View style={styles.button}>   
          <Button
            onPress={this.inc.bind(this)}
            title="Next"
            color="#34495e"
            accessibilityLabel="Toggle display "
          />
        </View>
        <View style={styles.button}>   
          <Button
            onPress={this.Inc.bind(this)}
            title="Back"
            color="#34495e"
            accessibilityLabel="Toggle display "
          />
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  text: {
    fontSize: 30,
    marginTop: 250,
    marginLeft:15
  },
   button: {
    padding: 10,
    marginTop: 70,
    alignItems: 'center'
  },
  
  
});
