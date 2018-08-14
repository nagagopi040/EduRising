import React,  { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import styles from '../../stylesheets/commonStyles'

export default class Loader extends Component {
    render(){
        return (
            <ActivityIndicator size="large" color="#1f90cc" style={styles.loader}/>
        )
    }
}