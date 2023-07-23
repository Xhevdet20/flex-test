import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './ForgotPassword.styles'

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

function ForgotPassword(props: Props): JSX.Element {
  const [linkSent, setLinkSent] = useState<boolean>(false);

  const onForgotPassword = () => {
    setLinkSent(true);
  };

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
            {!linkSent && (
              <Text style={styles.title}>You’ve forgotten your password?</Text>
            )}
            {!linkSent && (
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
              </View>
            )}
            <Text style={styles.disclaimer}>
              Please enter your username or email address so we can send you a
              confirmation link.
            </Text>
            <Button
              style={{width: '80%'}}
              theme={{
                colors: {
                  primary: linkSent ? 'rgba(29, 161, 147, 1)' : 'white',
                  onPrimary: '#000',
                },
              }}
              mode="contained"
              onPress={() => onForgotPassword()}>
              {linkSent ? 'Confirmation Link Sent' : 'Send Confirmation Link'}
            </Button>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}
              style={styles.backButton}>
              <AntDesign
                name="arrowleft"
                size={20}
                color="white"
              />
              <Text style={styles.backButtonText}> Back to Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default ForgotPassword;
