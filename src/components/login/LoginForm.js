import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GenerateForm from 'react-native-form-builder';

const fields = [
    {
      type: 'text',
      name: 'user_name',
      required: true,
      icon: 'ios-person',
      label: 'Username',
    },
    {
      type: 'password',
      name: 'password',
      icon: 'ios-lock',
      required: true,
      label: 'Password',
    }
];

class LoginFrom extends Component {
    render(){
        return(
            <View>
                <GenerateForm
                    ref={(c) => {
                    this.formGenerator = c;
                    }}
                    fields={fields}
                />
            </View>
        )
    }
}