import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, Icon, Input } from 'native-base'
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { position } from 'native-base/lib/typescript/theme/styled-system';

const SearchHome = ({ onSearch }:any) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      onSearch(searchText);
    };

    const inset = useSafeAreaInsets();
    return ( 
        <Box style={[styles.searchHeader, ]}>
          <View style={styles.boxHome}>
            <Input
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
                placeholder="Search"
                variant="unstyled"
                width="100%"
                borderRadius="10"
                py="1"
                px="2"
                color={'white'}
                InputLeftElement={
                <Icon
                    ml="2"
                    size="4"
                    color="gray.400"
                    as={<Ionicons name="ios-search" />}
                />
                }
            />
          </View>
        </Box>
  )
}

export default SearchHome
const styles = StyleSheet.create({
    searchHeader: {
      position: "absolute",
      width: "95%",
      height: 35,
      top: 29,
      borderRadius: 10,
      borderColor: 'white',
      borderWidth: 1,
      alignItems:'center',
      justifyContent: 'center',
    },
    
    boxHome: {
      position: 'absolute',
      width: '100%',
      // top: 12,
    }
});