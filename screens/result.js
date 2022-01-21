import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Main from '../src/main.jpg';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.BannerContainer}>
        <Image source={Main} style={styles.banner} resizeMode="contain" />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  BannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 300,
    width: 300,
  },
});
