import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Image, ScrollView } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { RootStackParams } from "../navigations/config";
import { useNavigation } from "@react-navigation/native";
import { ELoaiNC } from "../data/dataHome";

type Props = {};
// props: Props
const HomeList = ({ data }: { data: any[] }) => {
  const navigation = useNavigation<any>(); 
  const loai1 = data.filter((item) => item.type === ELoaiNC.Bac);
  const loai2 = data.filter((item) => item.type === ELoaiNC.Nam);
  const loai3 = data.filter((item) => item.type === ELoaiNC.Trung);
  
  return (
    <View style={styles.option}>
      <View style={styles.opitonMs}>
        <Text style={styles.titleOption}>Miền Bắc</Text>

        {loai1.map((item: any) => {
          return (
            <Box style={styles.menuOption}>
              <View style={styles.musicalOption}>
                <Image source={item.image} width={16} height={16} borderRadius={10}></Image>
                <View style={styles.textOption}>
                  <Text style={styles.subtextOption}>{item.title}</Text>
                  <Text>{item.subtitle}</Text>
                </View>
              </View>

              <View style={styles.iconOption}>
                <Button
                  onPress={() =>
                    navigation.navigate("Using", {
                      data: item,
                    })
                  }
                  style={styles.btnPlay}
                >
                  <EvilIcons name="arrow-right" size={30} color="black" />
                </Button>
              </View>
            </Box>
          );
        })}

        <Text style={styles.titleOption}>Miền Nam</Text>
         {loai2.map((item: any) => {
          return (
            <Box style={styles.menuOption}>
              <View style={styles.musicalOption}>
                <Image source={item.image}  width={16} height={16}   borderRadius={10}></Image>
                <View style={styles.textOption}>
                  <Text style={styles.subtextOption}>{item.title}</Text>
                  <Text>{item.subtitle}</Text>
                </View>
              </View>

              <View style={styles.iconOption}>
                <Button
                  onPress={() =>
                    navigation.navigate("Using", {
                      data: item,
                    })
                  }
                  style={styles.btnPlay}
                >
                  <EvilIcons name="arrow-right" size={30} color="black" />
                </Button>
              </View>
            </Box>
          );
        })}

        <Text style={styles.titleOption}>Miền Trung</Text>
         {loai3.map((item: any) => {
          return (
            <Box style={styles.menuOption}>
              <View style={styles.musicalOption}>
                <Image source={item.image}  width={16} height={16} borderRadius={10}></Image>
                <View style={styles.textOption}>
                  <Text style={styles.subtextOption}>{item.title}</Text>
                  <Text>{item.subtitle}</Text>
                </View>
              </View>

              <View style={styles.iconOption}>
                <Button
                  onPress={() =>
                    navigation.navigate("Using", {
                      data: item,
                    })
                  }
                  style={styles.btnPlay}
                >
                  <EvilIcons name="arrow-right" size={30} color="black" />
                </Button>
              </View>
            </Box>
          );
        })}
      </View>
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  menuOption: {
    display: "flex",
    width: "95%",
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
    width: "90%",
    alignItems: "center",
  },

  titleOption: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F47C50",
    width: "100%",
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
  },

  textOption: {
    paddingLeft: 12,
  },

  subtextOption: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1F2937",
    lineHeight: 24,
  },

  iconOption: {
    width: '20%',
  },

  btnPlay: {
    backgroundColor: "#fff",
  },

  option: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 14,
    paddingHorizontal: 30,
  },

  opitonMs: {
    
  },
});
