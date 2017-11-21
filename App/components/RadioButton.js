import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, TextInput } from 'react-native';


import RadioButton from 'radio-button-react-native'; // 1.1.6
class Example extends Component {
  constructor (props){
     super(props)
       this.state = {
            value: -1,
            showSubQues: false,
            QuestionsArray: ["Question1", "Question2","Question3","Question4","Question5","Question6","Question7","Question8"],
            index:0
        }

    
  }
  toggleSubQues(bool,val) {
  
    this.setState({
      showSubQues:bool,
      value:val
    });
   if(!bool){
   this.setState({
      index:this.state.index+1,
      value:-1
    });
   }
  }
  
 render(){
     return(
        <View>
          <View style = {styles.container}>
               <Text> {this.state.QuestionsArray[this.state.index]} </Text>
               <RadioButton currentValue={this.state.value} value={0} onPress={this.toggleSubQues.bind(this,true,0)}>
                <Text>yes</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value={1} onPress={this.toggleSubQues.bind(this,false,1)}>
                 <Text>no</Text>
                 </RadioButton>
                 
                 <RadioButton currentValue={this.state.value} value={2} onPress={this.toggleSubQues.bind(this,false,2)}>
                 <Text>not yet</Text>
               </RadioButton>
          </View>
          {this.state.showSubQues && <Hiddentext/>}
        </View>   
      );
    }    
} 

class Hiddentext extends Component {

   constructor (props){
     super(props)
    
     this.state = {
            value: [],
        }
       // this.state = { text: 'Select'}
  }

  handleOnPress(index,val){
    var obj = this.state.value;
    obj[index] = val;
    this.setState({
      value:obj
    })
 }
 
 //state = {
 //   valueSelected: 'select'
 // }
  
  
  render() {
    return(
     <ScrollView>
        <View style={{flex: 1}}>
         <Text> 1.1 What Type of Workout Did You Do Today? </Text>
               <RadioButton currentValue={this.state.value[0]} value={0} onPress={this.handleOnPress.bind(this,0,0)}>
                <Text>Cardio</Text>
                 </RadioButton>
                 <RadioButton currentValue={this.state.value[0]} value={1} onPress={this.handleOnPress.bind(this,0,1)}>
                 <Text>Strength</Text>
                 </RadioButton>
                 <RadioButton currentValue={this.state.value[0]} value={2} onPress={this.handleOnPress.bind(this,0,2)}>
                 <Text>Both</Text>
               </RadioButton>
    <Text> 1.2 Was Your Workout Easy or Hard? </Text>
              <RadioButton currentValue={this.state.value[1]} value={0} onPress={this.handleOnPress.bind(this,1,0)}>
                 <Text>Easy</Text>
                 </RadioButton>
               <RadioButton currentValue={this.state.value[1]} value={1} onPress={this.handleOnPress.bind(this,1,1)}>
                 <Text>Hard</Text>
                </RadioButton>
      <Text> 1.3 Was Your Workout Today Enjoyable? </Text>
               <RadioButton currentValue={this.state.value[2]} value={0} onPress={this.handleOnPress.bind(this,2,0)}>
                 <Text>Yes</Text>
                 </RadioButton>
                <RadioButton currentValue={this.state.value[2]} value={1} onPress={this.handleOnPress.bind(this,2,1)}>
                 <Text>No</Text>
                </RadioButton>
       <Text> 1.4 Your Workout Effort Level? (with 1 being the easiest and 10 the hardest) </Text>
           <View style={styles.picker}>
              <View style={styles.inputBox}>
                <Picker
                  selectedValue={this.state.value[3]}
                  onValueChange={(itemValue) => {
                  this.handleOnPress(3,itemValue)
                  }}
                  enabled={true}
                  >
                 <Picker.Item label='select' value='-1'/>
                 <Picker.Item label='1' value='1'/>
                 <Picker.Item label='2' value='2'/>
                 <Picker.Item label='3' value='3'/>
                 <Picker.Item label='4' value='4'/>
                 <Picker.Item label='5' value='5'/>
                 <Picker.Item label='6' value='6'/>
                 <Picker.Item label='7' value='7'/>
                 <Picker.Item label='8' value='8'/>
                 <Picker.Item label='9' value='9'/>
                 <Picker.Item label='10' value='10'/>
                 </Picker>
             </View>
           </View>
     <Text> 1.5 Was Your Workout Today Enjoyable? </Text>
              <RadioButton currentValue={this.state.value[4]} value={0} onPress={this.handleOnPress.bind(this,4,0)}>
                 <Text>Yes</Text>
                 </RadioButton>
                 <RadioButton currentValue={this.state.value[4]} value={1} onPress={this.handleOnPress.bind(this,4,1)}>
                 <Text>No</Text>
                </RadioButton>
     <Text> 1.6 Water Consumed During Workout (Ounces) </Text>
           <View style={styles.picker}>
              <View style={styles.inputBox}>
                <Picker
                  selectedValue={this.state.value[5]}
                  onValueChange={(itemValue) => {
                  this.handleOnPress(5, itemValue)
                  }}
                  enabled={true}
               >
                 <Picker.Item label='select' value='-1'/>
                 <Picker.Item label='0' value='0'/>
                 <Picker.Item label='5' value='5'/>
                 <Picker.Item label='10' value='10'/>
                 <Picker.Item label='15' value='15'/>
                 <Picker.Item label='20' value='20'/>
                 <Picker.Item label='25' value='25'/>
                 <Picker.Item label='30' value='30'/>
                 <Picker.Item label='35' value='35'/>
                 <Picker.Item label='40' value='40'/>
                 <Picker.Item label='45' value='45'/>
                 <Picker.Item label='50' value='50'/>
                 <Picker.Item label='55' value='55'/>
                 <Picker.Item label='60' value='60'/>
                 <Picker.Item label='65' value='65'/>
                 <Picker.Item label='70' value='70'/>
                 <Picker.Item label='75' value='75'/>
                 <Picker.Item label='80' value='80'/>
                 <Picker.Item label='85' value='85'/>
                 <Picker.Item label='90' value='90'/>
                 <Picker.Item label='95' value='95'/>
                 <Picker.Item label='100' value='100'/>
                </Picker>
             </View>
           </View>
        <Text> 1.7 Tablespoons of Chia Seeds Consumed During Workout? </Text>
            <View style={styles.picker}>
              <View style={styles.inputBox}>
                <Picker
                  selectedValue={this.state.value[6]}
                  onValueChange={(itemValue) => {
                  this.handleOnPress(6,itemValue)
                  }}
                  enabled={true}
               >
                <Picker.Item label='select' value='-1'/>
                 <Picker.Item label='1' value='1'/>
                 <Picker.Item label='2' value='2'/>
                 <Picker.Item label='3' value='3'/>
                 <Picker.Item label='4' value='4'/>
                 <Picker.Item label='5' value='5'/>
                 <Picker.Item label='6' value='6'/>
                 <Picker.Item label='7' value='7'/>
                 <Picker.Item label='8' value='8'/>
                 <Picker.Item label='9' value='9'/>
                 <Picker.Item label='10' value='10'/>
                </Picker>
             </View>
           </View>
        <Text> 1.8 What % of Your Workout Did you breathe in and out through Your nose? </Text>
            <View style={styles.picker}>
              <View style={styles.inputBox}>
                <Picker
                  selectedValue={this.state.value[7]}
                  onValueChange={(itemValue) => {
                  this.handleOnPress(7,itemValue)
                  }}
                  enabled={true}
               >
                 <Picker.Item label='select' value='select'/>
                 <Picker.Item label='0' value='0'/>
                 <Picker.Item label='5' value='5'/>
                 <Picker.Item label='10' value='10'/>
                 <Picker.Item label='15' value='15'/>
                 <Picker.Item label='20' value='20'/>
                 <Picker.Item label='25' value='25'/>
                 <Picker.Item label='30' value='30'/>
                 <Picker.Item label='35' value='35'/>
                 <Picker.Item label='40' value='40'/>
                 <Picker.Item label='45' value='45'/>
                 <Picker.Item label='50' value='50'/>
                 <Picker.Item label='55' value='55'/>
                 <Picker.Item label='60' value='60'/>
                 <Picker.Item label='65' value='65'/>
                 <Picker.Item label='70' value='70'/>
                 <Picker.Item label='75' value='75'/>
                 <Picker.Item label='80' value='80'/>
                 <Picker.Item label='85' value='85'/>
                 <Picker.Item label='90' value='90'/>
                 <Picker.Item label='95' value='95'/>
                 <Picker.Item label='100' value='100'/>
                </Picker>
             </View>
           </View>
         <Text> 1.9 Were You Fasted During Your Workout? </Text>
               <RadioButton currentValue={this.state.value[8]} value={0} onPress={this.handleOnPress.bind(this,8,0)}>
                 <Text>Yes</Text>
                 </RadioButton>
                <RadioButton currentValue={this.state.value[8]} value={1} onPress={this.handleOnPress.bind(this,8,1)}>
                 <Text>No</Text>
                </RadioButton>

          <Text> 1.10 General Workout Comments </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20, alignItems: 'center' }}
            onChangeText={(text) => this.handleOnPress(9,text)}
            value={this.state.value[9]}
          />  
               
        <Text> 1.11 Approximately How Many Calories Did You Consume During Your Workout? </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20, alignItems: 'center' }}
            onChangeText={(text) =>  this.handleOnPress(10,text)}
            value={this.state.value[10]}
          />  
               
        <Text> 1.12 What Specifically Did You Consume During Your Workout? </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20, alignItems: 'center' }}
             onChangeText={(text) => this.handleOnPress(11,text)}
            value={this.state.value[11]}
          />  
     
          
          
        </View>       
   </ScrollView>
    );

  }
}





const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  picker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
    inputBox: {
    height: 40,
    width:200,
    borderWidth: 1,
    justifyContent: 'center'
  },
  

})

export default Example;
