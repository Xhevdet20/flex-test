import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
// import styles from './Login.styles';
// import CheckBox from '@react-native-community/checkbox';
// import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = ;

interface Props {
  navigation: NavigationProp<ParamListBase>
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
          <View>
            <Text style={styles.title}>Login to your account</Text>

            <View style={styles.loginFormContainer}>
              <TextInput
                placeholder="Username / Email"
                placeholderTextColor="rgba(35, 31, 32, 0.5)"
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(35, 31, 32, 0.5)"
                style={styles.input}
              />
              <Icon name="rocket" size={30} color="#900" />
            </View> 
          </View>
        </View> 
      </SafeAreaView>
    </ScrollView>
  ); 
  // return (
  //     <>
  //       <View style={{ ...styles.flex, justifyContent: "space-between", width: "80%" }}>
  //         <View style={styles.flex} >
  //           {/* <CheckBox
  //             disabled={false}
  //             value={toggleCheckBox}
  //             onValueChange={(newValue) => setToggleCheckBox(newValue)}
  //             tintColors={{ true: '#0f0', false: "#fff" }}
  //           /> */}
  //           <Text style={{ color: "#fff", fontSize: 16 }}>Remember me</Text>
  //         </View>
  //         <Text
  //           style={{ color: "#fff", fontSize: 14 }}
  //           // onPress={() => {
  //           //   props.navigation.navigate('Forgot Password')
  //           // }}
  //         >
  //           I forgot my password
  //         </Text>
  //       </View>
  //       {/* <Button
  //         style={{ width: "80%", marginTop: '10%' }}
  //         theme={{ colors: { primary: 'white', onPrimary: "#000" } }}
  //         mode="contained"
  //         onPress={() => {
  //           props.navigation.navigate('Products')
  //         }}
  //       >
  //         Sign In
  //       </Button> */}
  //     </>
  //   // </Background>
  // );
}

const styles = StyleSheet.create({
  loginFormContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginTop: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    marginTop: '5%',
    padding: 10,
    color: 'black',
  },
  logo : {
    alignSelf: 'center',
    marginTop: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Login;
