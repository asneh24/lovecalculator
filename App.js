

import React from 'react';
import { View } from 'react-native';
import { TextInput,Appbar,Button } from 'react-native-paper';
import Displaylove from './components/Displaylove'
class App extends React.Component{

  state = {
    fname:'',
    sname:'',
    result:"loading"
  }

  submitit(){
    console.log("Call ho raha hai ")
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
      headers:{
        "x-rapidapi-key": "9184b11715mshca5113a20e9d25fp19e9d4jsneeadf5082ef7",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
	      "useQueryString": true
      }
    })
    .then(data=>data.json())
    .then(data2 => {
      console.log(data2);
      this.setState({
          result:data2
      })
    })
  }
  render(){
    return(
      <View>
      <Appbar.Header>
  
      <Appbar.Content title="Love Calculator"
      style = {{alignItems:"center"}} />
    
    </Appbar.Header>

    {/* <TextInput
      label="Enter Male"
      value={text}
      onChangeText={text => setText(text)}
    />
     <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    /> */}
        <TextInput
      label="Enter Male Name"
      //value={this.state.fname}
      onChangeText={text => this.setState({fname:text})}
    />
     <TextInput
      label="Enter Female Name"
      //value={this.state.sname}
      onChangeText={text => this.setState({sname:text})}
    />

<Button mode="contained" style = {{margin:10}} onPress={this.submitit.bind(this)}>
    Calculate 
  </Button>

  <Displaylove  data={this.state.result}/>
      </View>
    );
  }
}

export default App;
