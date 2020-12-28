import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

// show same form
//edit:
// pass in initial title and content

// create:
// empty content

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
            <Button
                title="Save Blog Post"
                onPress={() => {

                }}
            />
        </View>
    )
    // use callback function to navigate once we have added the blogpost
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});


export default BlogPostForm;