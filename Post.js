import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    elevation: 5, // Android
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  author: {
    color: '#999999',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  description: {
    color: '#666666',
  },
});

const Post = props => (
  <View style={styles.post}>
    <Text style={styles.title}>{ props.title }</Text>
    <Text style={styles.author}>{ props.author }</Text>
    <Text style={styles.description}>{ props.description }</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
