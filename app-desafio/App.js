import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: 0,
      idade: '',
      sex0: '',
      sexo: [
        { key: 1, nome: 'masculino', valor: 35.9 },
        { key: 2, nome: 'feminino', valor: 45.0 },
      ],
      sliderValor: 250,
      statusSwitch: false,
    };

    this.enviarDados = this.enviarDados.bind(this);
  }

  enviarDados(){

    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexo[this.state.sex0].nome + ' \n' +
      'Limite Conta: ' + this.state.sliderValor.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.statusSwitch)? 'Ativo' : 'Inativo')
      );
  
  }

  render() {
    let sexoItem = this.state.sexo.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Olá, Bem-Vindo!</Text>
          <Text style={styles.subtitulo}> Realize seu cadastro </Text>

          <View style={styles.body}>
            <TextInput
              style={styles.input1}
              label="nome"
              onChangeText={(valor) => {
                this.setState({ nome: valor });
              }}
            />
            <TextInput
              style={styles.input2}
              label="idade"
              keyboardType="numeric"
            />

            <Picker
              style={styles.sexo1}
              selectedValue={this.state.sex0}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sex0: itemValue })
              }>
              {sexoItem}
            </Picker>

            <View style={styles.sliderLimite}>
              <Text style={styles.textoLimite}>
                Limite Desejado - R$ {this.state.sliderValor.toFixed(2)}
              </Text>
              <Slider
                style={styles.limite}
                minimumValue={0}
                maximumValue={500}
                maximumTrackTintColor="#FFF"
                minimumTrackTintColor="#FFFF01"
                onValueChange={(valorSelecionado) =>
                  this.setState({ sliderValor: valorSelecionado })
                }
                value={this.state.sliderValor}
              />
            </View>

            <View style={styles.estudante}>
              <Text style={styles.textoEstudante}>Estudante: </Text>
              <Switch
                value={this.state.status}
                onValueChange={(valorSwicth) =>
                  this.setState({ status: valorSwicth })
                }
                thumbColor="red"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.botao} onPress={this.enviarDados}>
            <Text style={styles.textoBotao}> fazer cadastro </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0147E7',
  },
  titulo: {
    fontSize: 30,
    color: '#FFFF01',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 30,
  },
  subtitulo: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'row',
    marginLeft: 40,
  },
  body: {
    width: 270,
    height: 350,
    alignSelf: 'center',
    backgroundColor: '#4C7BFE',
    marginTop: 25,
    borderRadius: 30,
  },
  input1: {
    witdh: 50,
    height: 45,
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#E1E8FF',
  },
  input2: {
    witdh: 50,
    height: 45,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#E1E8FF',
  },
  sexo1: {
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#E1E8FF',
  },
  sliderLimite: {
    marginTop: 20,
    alignItems: 'center',
  },
  textoLimite: {
    color: '#FFF',
  },
  limite: {
    width: 225,
    marginTop: 5,
  },
  botao: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    backgroundColor: '#FFFF01',
    borderRadius: 40,
    margin: 20,
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 20,
    textAlign: 'center',
    color: '#0147E7',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  estudante: {
    width: 100,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  textoEstudante: {
    color: '#FFF',
    marginBottom: 5,
  },
});

export default App;
