import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class AlbumDetail extends Component {
  render() {
    const { albumDetail } = this.props.route.params;
    console.log(albumDetail);
    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 20 }}>
        <Image
          style={{ height: 300, width: 300 }}
          source={{ uri: albumDetail.artworkUrl100 }}
        />
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
          {albumDetail.trackName}
        </Text>
        <Text
          style={{ fontSize: 14 }}
        >{`${albumDetail.collectionName} | ${albumDetail.artistName}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 30,
          }}
        >
          <MusicButton icon='stepbackward' iconSize={24} />
          <MusicButton icon='playcircleo' iconSize={100} />
          <MusicButton icon='stepforward' iconSize={24} />
        </View>
      </View>
    );
  }
}

const MusicButton = (props) => {
  const { icon, iconSize } = props;
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
      <AntDesign name={icon} size={iconSize} color='black' />
    </TouchableOpacity>
  );
};
