import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from '../components/title';
import Main from '../src/main.jpg'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.BannerContainer}>
        <Image source={Main} style={styles.banner} resizeMode="contain" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  BannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  banner:{
    height: 300,
    width: 300,
  },
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height: '100%',
  },
  button:{
    width: '100%',
    backgroundColor: "#1a759f",
    padding: 16,
    borderRadius: 16,
    alignItems:'center',
    marginBottom:30,
  },
  startText:{
    fontSize:24,
    fontWeight:'600',
    color:"white",
  }
})