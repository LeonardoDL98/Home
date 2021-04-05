import React, { Component } from 'react';
import { View, Switch, StyleSheet, Image, Text, Alert } from 'react-native';
//Que onda mi LEO jajajajajja



export default class Foco extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle1: true,
      id_foco: 0

    };
  }

  LED = () => {

    const { id_foco } = this.state;

    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        



      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        //  if(responseJson=="1")
        Alert.alert("The focus is  " + responseJson);
        //  else{
        //    Alert.alert(responseJson);
        //    this.props.navigation.navigate('Tab');
        //  }

      }).catch((error) => {
        console.error(error);
      });


  }
  componentDidMount() {
    fetch('http://192.168.1.69/statuscomponent.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        com: 1
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          toggle1: JSON.stringify(responseJson['status']) == "1" ? true : false,
        })
        //    this.props.navigation.navigate('Tab');

      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}></Text>
       
        <Text>{this.state.toggle1 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle1: value }, this.LED, this.state.id_foco = 2)}
          value={this.state.toggle1}
        />
      </View>
    )
  }
}

   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  middle: {
    flex: 1,

    borderWidth: 1,
    width: 100,
    height: 100,
  },
  welcomefoco: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: -75,
    marginLeft: -160,
    justifyContent: 'flex-end'
  },
  texto: {
    fontSize: 18,
    textAlign: "center"
  }
});