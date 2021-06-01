import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Switch, Text, Touchable, TouchableOpacity, View } from 'react-native';

import { Header } from '../components/Header';
import { HeaderIOS } from '../components/Header.ios';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
   const [tasks, setTasks] = useState<Task[]>([]);
   const [darktheme,setDarkTheme] = useState<boolean>(false);
   

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {id: new Date().getTime(), title: newTaskTitle, done:false }
    setTasks(oldState => [...oldState, newTask]);
    
   
  }

  function handleMarkTaskAsDone(id: number) {
    const aux = tasks;
    aux.forEach(task =>{
      if(task.id === id){
        task.done =  !task.done;
      }
    });
    setTasks([...aux]);
  }

  function handleRemoveTask(id: number) {
    
    
    setTasks(oldState => oldState.filter(task => task.id !== id));
    

    
  }
 
  return (
  
    <SafeAreaView style = {[styles.container, (darktheme ? {backgroundColor:'#1F1F1F'}: {backgroundColor:"#FFF"})]}>
      <Switch
      style = { darktheme? styles.switchDark : styles.switch }
      trackColor={{ false: "#767577", true: "#9347CA" }}
      thumbColor={darktheme ? "#9347CA" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => setDarkTheme(oldState => !oldState)}
      value={darktheme}
    />
        {Platform.OS =='ios'? <HeaderIOS/> :<Header darkTheme = { darktheme }/>}
        <TodoInput addTask = { handleAddTask } darkTheme ={ darktheme }/>
        <MyTasksList
        darkTheme = { darktheme }
        tasks ={tasks}
        onPress ={ handleMarkTaskAsDone }
        onLongPress={ handleRemoveTask }
        />
      

    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-start',
    width:'100%',
    height:'100%',
    
   
  },
  switch:{
    paddingVertical: 50,
    backgroundColor: '#273FAD',
    justifyContent:'flex-end'
  },
  switchDark:{
    paddingVertical: 50,
    backgroundColor: '#282B5A',
    justifyContent:'flex-end'
  }
});