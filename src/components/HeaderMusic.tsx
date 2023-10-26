import { View, Text, StyleSheet, Alert, Button } from "react-native";
import React, { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { Box } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderMusic = ({ data, ytb, setYtb }: any) => {
  const inset = useSafeAreaInsets();

  // Them vao
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state:any) => {
    if (state === "ended") {
      // code moi
      setYtb(false);

      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    setYtb((prev:any) => !prev)
  }, []);
  // console.log(ytb); 
  
  return (
    <View style={styles.header}>
      <View style={styles.imgHeader}>
        <YoutubePlayer height={250} play={false} videoId={data.idMusicYtb} onChangeState={onStateChange}/> 
      </View>
        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}

      <Box style={[styles.searchHeader, { paddingTop: inset.top }]}>
        <Text style={{ color: "white" }}>{data.title}</Text>
      </Box>
    </View>
  );
};

export default HeaderMusic;

const styles = StyleSheet.create({
  imgHeader: {
    width: "100%",
  },

  header: {
    position: "relative",
    width: "100%",
  },

  searchHeader: {
    position: "absolute",
    width: "100%",
    bottom: 32,
    left: 24,
  },
});
