import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Center, Image } from 'native-base';

const HeaderUsing = ({dataUsing}: any) => {
    const inset = useSafeAreaInsets();
    const dataUs = dataUsing.data;
    
    return (
      <Box style={styles.header}>
        {/* <Box> */}
          {/* <Image
            style={styles.imgHeader}
            // height={32}
            source={dataUs.bigImage}
          /> */}
              {/* <Center> */}
                <Image source={dataUs.bigImage} alt="Alternate Text" size='xl' height={260} style={styles.imgHeader} />
          {/* </Center> */}
        {/* </Box> */}
        <Box style={[styles.searchHeader, { paddingTop: inset.top }]}>
          <Text style={{ color: "white" }}>
            {dataUs.title} - {dataUs.subtitle}
          </Text>
        </Box>
      </Box>
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