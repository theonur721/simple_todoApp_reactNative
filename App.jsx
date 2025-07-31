import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import TodoItem from './src/components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]); // todolar için
  const [text, setText] = useState(''); // input için

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
    setText('');
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>ToDo App</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="enter todo"
            value={text}
            onChangeText={setText}
          />
          <Button title="Add" onPress={addTodo} />
        </View>

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              onDelete={deleteTodo}
              onToggle={toggleComplete}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addbtn: {
    width: '30%',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});
