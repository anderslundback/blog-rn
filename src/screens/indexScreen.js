import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default IndexScreen;
