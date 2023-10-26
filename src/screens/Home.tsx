import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeList from "../components/HomeList";
import { data } from "../data/dataHome";
import SearchHome from "../components/SearchHome";
import unorm from 'unorm';
import { Box, ScrollView } from "native-base";

const dataHome = data.itemsHome;

type Props = {};
// props: Props
const Home = () => {
  const [filteredNameSongs, setFilteredNameSongs] = useState(dataHome);

  const handleSearch = (query:any) => {
    if(query === '') {
      setFilteredNameSongs(dataHome);
    } else {
      const normalizedQuery = unorm.nfd(query).replace(/[\u0300-\u036f]/g, '');
      
      const filtered = dataHome.filter(
        (song) =>
          unorm
          .nfd(`${song.title}`)
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(normalizedQuery.toLowerCase())    
      )
      setFilteredNameSongs(filtered);
    }
  }
  
  return (
    <Box style={styles.container} >
      <Box style={styles.header}>
        <Image
          style={styles.imgHeader}
          height={36}
          source={require("../../assets/img/image1.png")}
        />
        <SearchHome onSearch={handleSearch} />
      </Box>
      <ScrollView>
        <HomeList data={filteredNameSongs} />
      </ScrollView>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  imgHeader: {
    width: "100%",
  },

  header: {
    position: "relative",
    width: "100%",
    alignItems: 'center',
  },
  
});
