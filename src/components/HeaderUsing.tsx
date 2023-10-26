import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderUsing = ({dataUsing}: any) => {
    const inset = useSafeAreaInsets();
    const dataUs = dataUsing.data;
    
    return (
      <View style={styles.header}>
        <Image
          style={styles.imgHeader}
          height={36}
          source={dataUs.bigImage}
        />
        <Box style={[styles.searchHeader, { paddingTop: inset.top }]}>
          <Text style={{ color: "white" }}>
            2CELLOS - Thunderstruck [OFFICIAL VIDEO]
          </Text>
        </Box>
      </View>
    );
}

export default HeaderUsing
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
    bottom: 16,
    left: 24,
  },
})