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
  BulletIte: {
    alignItems: 'center',
    height: height * 0.075,
    borderBottomWidth: 1.5,
    borderColor: '#101D42',
    backgroundColor: '#89D2DC',
    flexDirection: 'row',
  },
  Title: {
    fontWeight: 'bold',
    marginTop: width * 0.05,
    marginBottom: width * 0.05,
    fontSize: height * 0.03,
  },
  EpisodeInformation: {
    marginTop: width * 0.05,
  },
  FontColor: {
    color: '#101D42',
  },
  PosterStyle: {
    marginTop: width * 0.05,
    width: width * 0.8,
    height: width * 0.8,
  }

});
