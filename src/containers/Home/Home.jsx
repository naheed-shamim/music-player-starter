import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { AlbumItem } from './AlbumItem';
const URL = 'https://itunes.apple.com/search?term=Michael+jackson';
export class Home extends Component {
  state = {
    musicData: [],
    error: null,
  };
  componentDidMount() {
    this._fetchData();
  }

  _fetchData = async () => {
    try {
      const musicResponse = await fetch(URL);
      const albumData = await musicResponse.json();
      this.setState({ musicData: albumData.results });
      // console.log(albumData.results);
    } catch (error) {}
  };

  _renderAlbumList = () => {
    return (
      <FlatList
        data={this.state.musicData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <AlbumItem
              key={item.trackId}
              item={item}
              onPress={() =>
                this.props.navigation.navigate('AlbumDetail', {
                  albumDetail: item,
                })
              }
            />
          );
        }}
      />
    );
  };

  render() {
    const { musicData } = this.state;
    const hasData = musicData.length > 0 ? this._renderAlbumList() : null;
    return <View style={{ flex: 1 }}>{hasData}</View>;
  }
}
