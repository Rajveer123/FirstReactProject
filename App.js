/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import LauncherImage from './images/ic_launcher.png';
import MainBackgroundImage from './images/login_background.jpg';
import ViewHeader from './app/components/Home/index.js';
import clearButtonImage from './images/icon_clear_field_big.png';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 14,
    marginTop: 40,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  mainView: {
    flex: 1,
    backgroundColor: 'yellow'
  }
  // bgImage: {
  //   width: 100,
  //   height: 100,
  //   flex: 1
  // }
});

const App = () => {

  const [text, setText] = useState('Initial Text');
  const screen = Dimensions.get("screen");
  state = {
    textValue: "hi this is default text"
  };

  onclick = () => {
    var emptyText = '';
    setText(emptyText);
  }
  onTextChanged = (newText) => {
    setText(newText);
  }
  handleBackButtonClick = () => {
    alert("Back Button clicked");
  }
  handleMoreButtonClick = () => {
    alert("More Button clicked");
  }
  return (
    <SafeAreaView backgroundColor="white">
      <ViewHeader projectName="React Project"
        handleBackButtonClick={this.handleBackButtonClick}
        handleMoreButtonClick={this.handleMoreButtonClick}
        showBackButton="false"
        showMoreButton="false"
        showOnlyImage="true" />


      <View style={styles.mainView}>
        <ImageBackground source={MainBackgroundImage} resizeMode="cover" style={{ width: screen.width, height: screen.height }} />
      </View>
      {/* <ScrollView
        contentInsetAdjustmentBehavior='automatic'>
        <View style={{ justifyContent: 'center', marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, margin: 10 }}>Header Title</Text>
          <Text style={{ fontSize: 14, marginTop: 20 }}>Sub Title</Text>
          <Image
            style={{ width: 50, height: 50, marginTop: 20 }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
          <Image
            style={{ width: 50, height: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
            source={LauncherImage}
          />
          <Text style={styles.subTitle}>Final Content</Text>
        </View>

        <View style={{ justifyContent: 'space-evenly', marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={LauncherImage}
          />
          // <Image
          //   style={{ width: 50, height: 50 }}
          //   source={LauncherImage}
          // />
        </View>


        <Text style={{ justifyContent: 'center', fontSize: 14, marginTop: 20, alignContent: 'flex-start' }}>{text.split(' ').map((workd) => workd && '@').join(' ')}</Text>

        <Text style={{ justifyContent: 'center', fontSize: 14, margin: 10, alignContent: 'center' }}>{text}</Text>
        <View style={{ flexDirection: 'row', borderRadius: 6, borderColor: 'gray', borderWidth: 3, margin: 10 }}>
          <TextInput
            placeholder="I am text box control"
            onChangeText={this.onTextChanged}
            value={text}
            style={{ fontSize: 14, height: 40, backgroundColor: 'white', flex: 1, padding: 5 }}
          />
          <TouchableHighlight onPress={this.onclick}>
            <Image source={clearButtonImage}
              style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', marginTop: 5 }} />
          </TouchableHighlight>
        </View>
      </ScrollView> */}
    </SafeAreaView >

  );
};

export default App;

