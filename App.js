import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';
import { styles } from './styles';

export default function App() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState([])

  const consultaCep = async (cep) => {
    if (cep.length !== 8) {
      alert('Digite um CEP com 8 números!')
      return;
    }

    const response = await api.get('/' + cep + '/json/');

    if (response.data.erro) {
      alert('CEP não encontrado!')
      setEndereco([])
      return;
    }

    setEndereco(response.data)
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cep x Endereço</Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP..."
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          maxLength={8}
        />

        <TouchableOpacity style={styles.botao} onPress={() => consultaCep(cep)}>
          <Feather name='check' size={30} color='green' />
        </TouchableOpacity>
      </View>

      <Text style={styles.endereco}>Cep: {endereco.cep}</Text>
      <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
      <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.endereco}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.endereco}>Estado: {endereco.uf}</Text>
    </View>
  );
}
