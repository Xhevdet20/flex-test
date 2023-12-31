import CheckBox from '@react-native-community/checkbox';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './Login.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function Login(props: Props): JSX.Element {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView
      style={{backgroundColor: 'rgb(30, 52, 69)'}}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Login to your account</Text>

            <View style={styles.loginFormContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Username / Email"
                  placeholderTextColor="rgba(35, 31, 32, 0.5)"
                  style={styles.input}
                />
                <Icon
                  name="user"
                  size={30}
                  color="rgba(30, 52, 69, 0.1)"
                  style={styles.icon}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(35, 31, 32, 0.5)"
                  style={styles.input}
                  secureTextEntry
                />
                <Icon
                  name="key"
                  size={30}
                  color="rgba(30, 52, 69, 0.1)"
                  style={styles.icon}
                />
              </View>
            </View>
            <View style={styles.otherOptions}>
              <View style={styles.checkBox}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  tintColors={{true: 'white', false: 'white'}}
                />
                <Text style={{color: '#fff', fontSize: 14}}>Remember me</Text>
              </View>

              <Text
                style={{color: '#fff', fontSize: 14}}
                onPress={() => {
                  props.navigation.navigate('Forgot Password')
                }}
              >
                I forgot my password
              </Text>
            </View>
            <Button
              style={{width: '80%', marginTop: '10%'}}
              theme={{colors: {primary: 'white', onPrimary: '#000'}}}
              mode="contained"
              onPress={() => {
                props.navigation.navigate('Products');
              }}>
              Sign In
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Login;
