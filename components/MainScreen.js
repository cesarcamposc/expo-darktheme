import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { toggleTheme } from '../store/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

const MainScreen = () => {

    const darkMode = useSelector(state => state.theme.isDarkTheme);

    const dispatch = useDispatch();

  return (
    <View style = {[styles.container,  {backgroundColor: darkMode ? '#33363D' : '#ffff'}]}>
      <Text style = {{color : darkMode ? '#ffff' : '#33363D', fontSize : 20}}>{darkMode ? 'Dark Mode' : 'Light Mode'}</Text>
      <Pressable style = {styles.button} onPress={() => dispatch(toggleTheme())}>
        <Text>Toggle Theme</Text>
      </Pressable>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',      
    },

    button: {
        marginTop: 50,
        padding: 20,
        backgroundColor: 'purple',
        borderRadius: 10,
    }
})