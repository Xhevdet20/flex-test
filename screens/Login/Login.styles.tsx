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
  otherOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
    width: '80%',
  },
  checkBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
