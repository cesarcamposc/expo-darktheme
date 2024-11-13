import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import MainScreen from '../components/MainScreen'
import { store } from '../store/store'

export default function index() {
  return (
    <Provider store={store}>
        <MainScreen />
    </Provider>
  )
}

const styles = StyleSheet.create({})