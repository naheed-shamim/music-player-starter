import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { AlbumItem } from './AlbumItem';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { Screens } from '../../navigator/NavigatorConstants';
import { Theme } from '../../CommonStyles';
const URL = 'https://itunes.apple.com/search?term=Michael+jackson';
export class Home extends Component {
  state = {
    loading: false,
    musicData: [],
    error: null,
  };
  componentDidMount() {
    this._fetchData();
  }

  _setLoading = (value) => {
    this.setState({ loading: value });
  };

  _fetchData = async () => {
    this._setLoading(true);

    //If it was a Larger App with many Fetch calls, we make generalised methods / static classes
    //for larger components, Redux preferable,
    fetch(URL)
      .then((response) => response.json())
      .then((albumData) =>
        this.setState({
          musicData: albumData.results,
          error: null,
          loading: false,
        })
      )
      .catch((err) =>
        this.setState({ error: 'Oops, Some Error Occurred', loading: false })
      );
  };

  _renderAlbumItem = (item) => {
    return (
      <AlbumItem
        key={item.trackId}
        item={item}
        onPress={() =>
          this.props.navigation.navigate(Screens.AlbumDetail, {
            albumDetail: item,
          })
        }
      />
    );
  };

  _renderAlbumList = () => {
    return (
      <FlatList
        data={this.state.musicData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => this._renderAlbumItem(item)}
      />
    );
  };
  _renderError = () => {
    const { error } = this.state;
    if (error) {
      return (
        <View style={styles.errorContainerStyle}>
          <Text style={style.errorTextStyle}>{error}</Text>
        </View>
      );
    } else return null;
  };

  render() {
    const { musicData, loading, error } = this.state;
    console.log(error);
    const showData = musicData.length > 0 && this._renderAlbumList();
    const showError = !!error && this._renderError();

    return (
      <View style={styles.container}>
        <LoadingSpinner visible={loading} />
        {showError}
        {showData}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: Theme.PRIMARY_ACCENT, flex: 1 },
  errorContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: { color: 'white' },
});
