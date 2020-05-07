import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Theme } from '../../CommonStyles';

export const AlbumItem = (props) => {
  const { item, onPress } = props;
  const {
    trackName = '',
    artistName = '',
    artworkUrl60 = '',
    collectionName = '',
  } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.albumImgStyle}
        source={{
          uri: artworkUrl60,
        }}
      />
      <View style={styles.textContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.trackTxtStyle}>{trackName}</Text>
          <Text style={styles.collectionNameStyle}>{collectionName}</Text>
          <Text style={styles.artistNameStyle}>{artistName}</Text>
        </View>
        <AntDesign name='right' size={10} color='white' />
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    marginBottom: 0,
    backgroundColor: Theme.SECONDARY_ACCENT,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  trackTxtStyle: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  albumImgStyle: { width: 50, height: 50, alignItems: 'center' },
  collectionNameStyle: { fontSize: 12, color: 'white' },
  artistNameStyle: { fontSize: 10, color: 'white' },
});
