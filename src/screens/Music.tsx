import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { data } from "../data/dataHome";
import HeaderMusic from "../components/HeaderMusic";
import ContentMusic from "../components/ContentMusic";

const Music = ({ route }:any) => {
  const dataMs = route.params.data; 
  const [test, setTest] = useState(false);
  // console.log(test);
  
  return (
    <View style={styles.container}>
      <HeaderMusic data={dataMs} ytb={test} setYtb={setTest} />

      <ContentMusic data={dataMs} ytb={test} setYtb={setTest}/>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    display: "flex",
  },
});
