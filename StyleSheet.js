import {Dimensions, StyleSheet} from 'react-native';
const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    backgroundColor: '#89D2DC',
  },
  todoItem: {
    alignItems: 'center',
    height: height * 0.075,
    borderBottomWidth: 1.5,
    borderColor: '#101D42',
    backgroundColor: '#89D2DC',
    flexDirection: 'row',
  },
  welcome: {
    color: '#101D42',
    fontWeight: 'bold',
    marginTop: width * 0.1,
    fontSize: height * 0.03,
  },
  instructions: {
    color: '#101D42',
  },
});
