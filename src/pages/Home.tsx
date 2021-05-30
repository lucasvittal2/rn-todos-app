import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

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
  
    <View style = {styles.container}>
        {Platform.OS =='ios'? <HeaderIOS/> :<Header/>}
        <TodoInput addTask = { handleAddTask } />
        <MyTasksList
        tasks ={tasks}
        onPress ={ handleMarkTaskAsDone }
        onLongPress={ handleRemoveTask }
        />
      

    </View>
  )
};
const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-start',
    width:'100%',
    height:'100%'
   
  }
});