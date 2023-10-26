import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Icon, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";

const ContentUsing = ({ dataUsing }: any) => {
  const navigation = useNavigation<any>();
  const dataUs = dataUsing.data;

  return (
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <View>
          <Text style={styles.contentTop}>{dataUs.title}</Text>
          <Text style={styles.contentBottom}>{dataUs.subtitle}</Text>
        </View>
        <View>
          <Button
            borderRadius={100}
            backgroundColor={"#F47C50"}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress={() => navigation.navigate("Music", { data: dataUs })}
          >
            Học cách chơi
          </Button>
        </View>
      </View>

      <View style={styles.text}>
        <Text style={styles.textSubText}>{dataUs.description}</Text>
      </View>

      <View style={styles.text}>
        <Text style={styles.textTitle}>Những điều thú vị về Cello</Text>
        <Text style={styles.textSubText}>{dataUs.interesting}</Text>
      </View>
    </View>
  );
};

export default ContentUsing;
const styles = StyleSheet.create({
  content: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },

  contentTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  contentTop: {
    fontSize: 36,
    color: "#F47C50",
  },

  contentBottom: {
    color: "#6B7280",
    fontSize: 12,
  },

  text: {
    marginVertical: 8,
  },

  textTitle: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 8,
  },

  textSubText: {
    lineHeight: 21,
  },
});
