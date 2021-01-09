import React, {useContext,useState} from "react";
import {View, Text, StyleSheet,Button,TextInput} from 'react-native';

const BlogPostForm = ({onSubmit,action,initialValues}) => {
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.title}>Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title={action} onPress={() => {onSubmit(title,content)}}/>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues : {
        title : '',
        content : ''
    }
}

const styles = StyleSheet.create({
    input : {
        borderColor:'black',
        borderWidth:1,
        padding:6,
        fontSize:18,
        marginBottom:5
    },
    title:{
        fontSize:20,
        color:'black',
        marginBottom:5
    },
    container:{
        margin:10
    }
});

export default BlogPostForm;