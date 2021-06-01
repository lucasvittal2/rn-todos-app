import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
interface flatListHeaderProps{
  darkTheme: boolean;
}
function FlatListHeaderComponent({darkTheme}: flatListHeaderProps) {
  return (
    <View>
      <Text style={darkTheme? styles.headerDark: styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  darkTheme: boolean;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  
}

export function MyTasksList({ tasks, onLongPress, onPress, darkTheme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style = {item.done?  darkTheme? styles.taskButtonDoneDark : styles.taskButtonDone  : styles.taskButton } 
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress = {() => onPress(item.id)}
            onLongPress = {() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              style = {item.done?  darkTheme? styles.taskMarkerDoneDark : styles.taskMarkerDone  : darkTheme? styles.taskMarkerDark : styles.taskMarkerDark } 
              //TODO - use style prop 
            />
            <View>
              <Text 
                style ={item.done?  darkTheme? styles.taskTextDoneDark: styles.taskTextDone : darkTheme? styles.taskTextDark: styles.taskText}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkTheme = { darkTheme }/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )

}

  const styles = StyleSheet.create({
    header: {
      color: '#3D3D4D',
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#3D3D4D',
      marginRight: 10
    },
    taskText: {
      color: '#3D3D4D',
      fontSize:20
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: 'rgba(25, 61, 223, 0.1)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: '#273FAD',
      marginRight: 10
    },
    taskTextDone: {
      color: '#A09CB1',
      textDecorationLine: 'line-through',
      fontSize:20
    },
    headerDark: {
      color: '#E1E1E6',
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButtonDark: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDark: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#3D3D4D',
      marginRight: 10
    },
    taskTextDark: {
      color: '#E1E1E6',
      fontSize:20
    },
    taskButtonDoneDark: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: '#413A6F',
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDoneDark: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: '#9347CA',
      marginRight: 10
    },
    taskTextDoneDark: {
      color: '#E1E1E6',
      textDecorationLine: 'line-through',
      fontSize:20
    }
  })