import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwicth) =>
            this.setState({ status: valorSwicth })
          }
          thumbColor="red"
        />

        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

export default App;
