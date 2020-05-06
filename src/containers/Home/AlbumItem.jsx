import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const AlbumItem = (props) => {
  const { item, onPress } = props;
  const {
    trackName = '',
    artistName = '',
    artworkUrl60 = '',
    collectionName = '',
  } = item;

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        padding: 5,
        margin: 5,
        marginBottom: 0,
        backgroundColor: 'white',
      }}
      onPress={onPress}
    >
      <Image
        style={{ width: 50, height: 50, alignItems: 'center' }}
        source={{
          uri: artworkUrl60,
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          marginLeft: 10,
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{trackName}</Text>
          <Text style={{ fontSize: 12 }}>{collectionName}</Text>
          <Text style={{ fontSize: 10 }}>{artistName}</Text>
        </View>
        <AntDesign name='right' size={10} color='black' />
      </View>
    </TouchableOpacity>
  );
};
