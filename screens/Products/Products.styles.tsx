import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(30, 52, 69)',
    height: '100%',
    paddingLeft: 5,
    paddingRight: 5,
  },
  input: {
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dropDown: {
    width: '49%',
    marginLeft: 7,
  },
  productsList: {flex: 1, width: '100%', padding: 5},
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {textAlign: 'center', fontSize: 20, color: '#FFF'},
});
export default styles;
