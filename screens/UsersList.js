import React, { Component } from 'react';
import { View, Switch, StyleSheet, Image, Text, Alert } from 'react-native';
//hola
//jejeje
//maluma

export default class Room1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showfoco1: false,
      showfoco2: false,
      showfoco3: false,
      showfoco4: false,
      showfoco5: false,
    };
  }

  componentDidMount() {
    this.setState({ showfoco1: true }) ;
    this.setState({ showfoco2: true }) ;
    this.setState({ showfoco3: true }) ;
    this.setState({ showfoco4: true }) ;
    this.setState({ showfoco5: true }) ;
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>{this.state.showfoco1 && <Foco1 />}</View>
        <View style={styles.container}>{this.state.showfoco2 && <Foco2 />}</View>
        <View style={styles.container}>{this.state.showfoco3 && <Foco3 />}</View>
        <View style={styles.container}>{this.state.showfoco4 && <Foco4 />}</View>
        <View style={styles.container}>{this.state.showfoco5 && <Foco5 />}</View>

      </View>
    );
  }
}
class Foco1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle1: false

    };
  }

  LED1 = () => {

  

    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foco: 1,

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
        Alert.alert("The focus is  " + responseJson['status']);
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
        <Text style={styles.texto}>Room Focus</Text>


        <Text>{this.state.toggle1 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle1: value }, this.LED1)}
          value={this.state.toggle1}
        />
      </View>
    )
  }
}
class Foco2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle2: true

    };
  }

  LED2 = () => {

    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foco: 2,

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
        com: 2
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("The focus is  " + responseJson['status']);
        this.setState({
          toggle2: JSON.stringify(responseJson['status']) == "1" ? true : false,
        })
        //    this.props.navigation.navigate('Tab');

      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Room Focus</Text>


        <Text>{this.state.toggle2 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle2: value }, this.LED2)}
          value={this.state.toggle2}
        />
      </View>
    )
  }
}
class Foco3 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle3: true

    };
  }

  LED3 = () => {

    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foco: 3,

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
        com: 3
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("The focus is  " + responseJson['status']);
        this.setState({
          toggle3: JSON.stringify(responseJson['status']) == "1" ? true : false,
        })
        //    this.props.navigation.navigate('Tab');

      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Room Focus</Text>


        <Text>{this.state.toggle3 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle3: value }, this.LED3)}
          value={this.state.toggle3}
        />
      </View>
    )
  }
}
class Foco4 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle4: true

    };
  }

  LED4 = () => {


    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foco: 4,

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
        com: 4
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("The focus is  " + responseJson['status']);
        this.setState({
          toggle4: JSON.stringify(responseJson['status']) == "1" ? true : false,
        })
        //    this.props.navigation.navigate('Tab');

      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Room Focus</Text>


        <Text>{this.state.toggle4 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle4: value }, this.LED4)}
          value={this.state.toggle4}
        />
      </View>
    )
  }
}
class Foco5 extends Component {
  constructor(props) {
    super(props);
    this.state = {

      toggle5: true

    };
  }

  LED5 = () => {

    fetch('http://192.168.1.69/componentes.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foco: 5,

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
        com: 5
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("The focus is  " + responseJson['status']);
        this.setState({
          toggle5: JSON.stringify(responseJson['status']) == "1" ? true : false,
        })
        //    this.props.navigation.navigate('Tab');

      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Room Focus</Text>


        <Text>{this.state.toggle5 ? 'ON' : 'OFF'}</Text>

        <Switch
          style={{ marginTop: 10 }}
          trackColor={{ false: 'gray', true: 'teal' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => this.setState({ toggle5: value }, this.LED5)}
          value={this.state.toggle5}
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

