import {StyleSheet} from 'react-native';

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
    padding: 5,
    color: 'black',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 24,
    right: 10,
    zIndex: 2,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    color: 'white',
    fontSize: 12,
    width: '80%',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  },
  backButton: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: 'white',
  },
});

export default styles;
