import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkTheme: boolean ;
};
export function TodoInput({ addTask, darkTheme }: TodoInputProps) {
  const [inputTask, setInputTask] = useState('');
  function handleAddNewTask() {
    //TODO - Call addTask and clean input value 
  
  if(inputTask != ''){
    addTask(inputTask);
    setInputTask('');
    
  }
    
    
  }

  return (
    <View style={[darkTheme? styles.inputContainerDark : styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={darkTheme? styles.inputDark : styles.input} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText = {setInputTask}
        value = { inputTask }
        onSubmitEditing= { handleAddNewTask }
       
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={darkTheme? styles.addButtonDark : styles.addButton}
        onPress = {  handleAddNewTask }
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#413A6F',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    flex: 1,
    backgroundColor: '#E1E1E6',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor:  '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor:  '#9347CA',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});