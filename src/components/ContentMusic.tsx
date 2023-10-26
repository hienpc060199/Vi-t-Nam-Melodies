import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

const ContentMusic = ({ data, ytb }: any) => {
  const [sounded, setSounded] = React.useState<any>(null);
  const [isPlayer, setIsPlayer] = React.useState(false);

  const dataMusics = data.audioMusic;
  const [indexBtn, setIndexBtn] = React.useState(-1);

  async function playSound(idx:any) {
    
    const { sound } = await Audio.Sound.createAsync(dataMusics[idx].music);
    setSounded(sound);
    await sound.playAsync();
  }

  async function stopSound() {
    await sounded.stopAsync();
    await sounded.setStatusAsync({ shouldPlay: false });
    setIsPlayer(false);
  }

  async function onPlay(idx: any) {
    setIndexBtn(idx);
    setIsPlayer(true);
    await playSound(idx);
  }

  React.useEffect(() => {
    return sounded
      ? () => {
          sounded.unloadAsync();
        }
      : undefined;
  }, [sounded]);
  
  // console.log(indexBtn);
  // console.log(isPlayer);
  // if(ytb) {
  //   setIsPlayer(false);
    
  // }
  return (
    <View style={styles.content}>
      <Text style={styles.textTitle}>Âm thanh mẫu</Text>
      {dataMusics.map((dataMusic: any, index: any) => {
        
        return (
          <Box style={styles.menuOption} key={index}>
            <View style={styles.musicalOption}>
              {dataMusic.id - 1 === index && (
                <TouchableOpacity
                  onPress={() => {
                    if (index === indexBtn && isPlayer) {
                      stopSound();
                    } else {
                      onPlay(index);
                    }
                  }}
                  style={styles.btnPlay}
                >
                  {index === indexBtn && isPlayer ? ( 
                    <AntDesign name="pausecircle" size={30} color="black" />
                  ) : (
                    <AntDesign name="play" size={30} color="black" />
                  )}
                </TouchableOpacity>
              )}

              <View style={styles.textOption}>
                <Text style={styles.subtextOption}>{data.title}</Text>
                <Text>Bấm vào để nghe</Text>
              </View>
            </View>
          </Box>
        );
      })}
    </View>
  );
};

export default ContentMusic;
const styles = StyleSheet.create({
  content: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  textTitle: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 8,
  },

  menuOption: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 8,
    marginVertical: 4,
  },

  musicalOption: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  btnPlay: {
    height: 63,
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  textOption: {
    width: "80%",
  },

  subtextOption: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1F2937",
    lineHeight: 24,
  },
});
