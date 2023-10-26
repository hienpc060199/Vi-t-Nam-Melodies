import { View, StyleSheet, Text } from "react-native";
import React from "react";
import {ScrollView } from "native-base";
import { data } from "../data/dataHome";
import HeaderUsing from "../components/HeaderUsing";
import ContentUsing from "../components/ContentUsing";

const Using = ({ route }:any) => {
  const dataHomes = route.params;

  return (       
    <View style={styles.container}>
      <HeaderUsing dataUsing={dataHomes}/>

      <ScrollView style={styles.scroll}>
        <ContentUsing dataUsing={dataHomes} />
      </ScrollView>
    </View> 
   
  )
};

export default Using;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    display: "flex",
    // justifyContent: 'center'
  },

  scroll: {
    width: '100%',
  }
});
