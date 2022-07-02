import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Icons from 'react-native-vector-icons/Feather';
import Card from './components/Card';

export default function App() {

  function handleRedeSocial(rede_social) {

    switch (rede_social) {
      case 'linkedin':
        Alert.alert('https://linkedin.com/in/mjkAraujo')
        break
      case 'github':
        Alert.alert('https://github.com/mjkaraujo')
        break
      case 'twitter':
        Alert.alert('https://mobile.twitter.com/mauriciomurruga')
        break
      case 'pdf':
        Alert.alert('teste pdf')
        break
    }
  };

  return (
    <ScrollView color='grey'>
      <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('./assets/foto100x100.png')}></Image>
        <Text style={styles.nome}>Mauricio Gonçalves de Araujo</Text>
        <Text style={styles.cargo}>desenvolvedor Full-Stack em formação</Text>
        <Text style={styles.cargo}>PYTHON | MYSQL | HTML | CSS | JAVASCRIPT | REACT NATIVE</Text>
        <View style={styles.redeSocial}>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icons name={'linkedin'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icons name={'github'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('twitter')}>
            <Icons name={'twitter'} size={30} />
          </TouchableOpacity>
        </View>
        <Card titulo='Sobre mim'>
          <Text style={styles.card_sobre}>
            Sou um estudante na área de tecnologia e atualmente estou em processo de transição de carreira. Mas nem sempre falar da gente mesmo é algo fácil de fazer...
            Como disse acima sou um desenvolvedor em fase de formação amo tecnologia desde programar , minha maior paixão, como jogos, equipamentos musicais dentre tantas coisas ligadas a esse mundo tech.
            Estudar sempre foi algo que sempre gostei, tanto que estou em minha segunda faculdade cursos em diversas áreas. Me sinto na necessidade de sempre está aprendendo coisas novas e aperfeiçoando as que já sei.
            Na vida pessoal, sou uma pessoa muito tranquila e muito família, amo mais que tudo estar com minha filha e esposa e quando não estou codando, estudando ou tocando guitarra com certeza estou em algum programa voltado a elas e quando não estou fazendo tudo isso que mencionei e elas estão ao meu lado.
            Bom esse é um pouquinho de mim.
          </Text>
        </Card>
        <Card titulo='Experiência Profissional'>
          <Text style={styles.card_subTitulo}>TOTAL CLEAN HIGIENIZAÇÃO TÊXTIL 2019-2022</Text>
          <Text>cargo: Gerente de Produção e Operações</Text>
          <Text style={styles.card_subTitulo}>EKKO SOLUÇÕES HOSPITALARES 2017-2019</Text>
          <Text>cargo: Gerente de Produção e Operações</Text>
          <Text style={styles.card_subTitulo}>INSTITUTO AMERICANO DE PESQUISA, MEDICINA E SAUDE PUBLICA - IAPMESP 2015-2017</Text>
          <Text>cargo: Gerente de Produção e Operações</Text>
          <Text style={styles.card_subTitulo}>HOSPITAL NIPO BRASILEIRO 2007-2014</Text>
          <Text>cargo: Assitente Administrativo</Text>
        </Card>
        <Card titulo='Formação Acadêmica'>
          <Text style={styles.card_subTitulo}>UNIVERSIDADE CRUZEIRO DO SUL</Text>
          <Text>curso: Ciências da Computação</Text>
          <Text>início: 08/2021   término: 08/2025</Text>
          <Text style={styles.card_subTitulo}>UNISANTANNA</Text>
          <Text>curso: Licenciatura em Música</Text>
          <Text>início: 08/2012   término: 08/2015</Text>
        </Card>
        <Card titulo='Habilidades'>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>PYTHON</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>MYSQL</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>HTML</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>CSS</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>JAVASCRIPT</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x29BF} style={styles.card_list}>
            <Text style={styles.card_list}>REACT NATIVE</Text>
          </Unorderedlist>
        </Card>
        <View style={styles.download}>
          <TouchableOpacity onPress={() => handleRedeSocial('pdf')}>
            <Icons name={'download'} size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginTop: 30,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cargo: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginTop: 5,
  },
  download: {
    justifyContent: 'center',
    marginTop: 20,
  },
  redeSocial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20,
  },
  card_subTitulo: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  card_list: {
    marginTop: 10,
  },
  card_sobre: {
    textAlign: 'justify',
  }
});
