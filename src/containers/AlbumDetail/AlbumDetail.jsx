import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Theme } from '../../CommonStyles';

export default class AlbumDetail extends React.Component {
  state = { paused: true };

  onPlayPressed = () => {
    this.setState({ paused: !this.state.paused });
  };

  _renderPlayPauseButton = () => {
    const { paused } = this.state;

    return paused ? 'playcircleo' : 'pausecircleo';
  };

  render() {
    const { albumDetail } = this.props.route.params;
    const playPauseIcon = this._renderPlayPauseButton();

    console.log(albumDetail);
    return (
      <View style={{ backgroundColor: Theme.PRIMARY_ACCENT, flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.albumImage}
            source={{ uri: albumDetail.artworkUrl100 }}
          />
          <Text style={styles.trackName}>{albumDetail.trackName}</Text>
          <Text
            style={styles.trackSubTitle}
          >{`${albumDetail.collectionName} | ${albumDetail.artistName}`}</Text>
          <View style={styles.musicControlStyle}>
            <MusicButton icon='stepbackward' iconSize={24} />
            <MusicButton
              icon={playPauseIcon}
              iconSize={100}
              onPress={() => this.onPlayPressed()}
            />
            <MusicButton icon='stepforward' iconSize={24} />
          </View>
        </View>
      </View>
    );
  }
}

{
  /* <AntDesign name="pausecircleo" size={24} color="black" /> */
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: Theme.SECONDARY_ACCENT,
    borderRadius: 10,
  },
  albumImage: { height: 300, width: 300, margin: 50 },
  trackName: { fontSize: 26, fontWeight: 'bold', color: 'white' },
  trackSubTitle: { fontSize: 14, color: 'white' },
  musicControlStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
});

const MusicButton = (props) => {
  const { icon, iconSize, onPress } = props;
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center' }}
      onPress={onPress}
    >
      <AntDesign name={icon} size={iconSize} color='white' />
    </TouchableOpacity>
  );
};
