import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Post from './Post';
import './ReactotronConfig';

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
  },
  conteudo: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: '#EE7777',
    marginBottom: 40,
  },
  titulo: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Primeiro Post',
        author: 'Autor 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus nunc, accumsan eu ante a, interdum bibendum est. Vestibulum consectetur eget nibh id convallis. Aenean pretium nisl nisl, vitae tristique urna maximus ut. Ut eu iaculis augue. Quisque nec nisl ut nisi cursus feugiat. Nam euismod metus sit amet ex suscipit ultricies.',
      },
      {
        id: 1,
        title: 'Segundo Post',
        author: 'Autor 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus nunc, accumsan eu ante a, interdum bibendum est. Vestibulum consectetur eget nibh id convallis. Aenean pretium nisl nisl, vitae tristique urna maximus ut. Ut eu iaculis augue. Quisque nec nisl ut nisi cursus feugiat. Nam euismod metus sit amet ex suscipit ultricies.',
      },
      {
        id: 2,
        title: 'Terceiro Post',
        author: 'Autor 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus nunc, accumsan eu ante a, interdum bibendum est. Vestibulum consectetur eget nibh id convallis. Aenean pretium nisl nisl, vitae tristique urna maximus ut. Ut eu iaculis augue. Quisque nec nisl ut nisi cursus feugiat. Nam euismod metus sit amet ex suscipit ultricies.',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>GoNative App</Text>
        </View>
        <ScrollView style={styles.conteudo}>
          {this.state.posts.map(post => <Post key={post.id} title={post.title} author={post.author} description={post.description} />)}
        </ScrollView>
      </View>
    );
  }
}
