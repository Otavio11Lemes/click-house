import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazená-los localmente.
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text>Email:</Text>
      <TextInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text>Senha:</Text>
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

export default CadastroUsuario;
