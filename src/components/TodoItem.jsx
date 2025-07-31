import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.text, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => onDelete(item.id)} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
