import React, {useContext} from "react";
import {StyleSheet} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {

    const {editBlogPost,state} = useContext(Context);
    const blogPost = state.find(post => {return post.id === navigation.getParam('id')});

    return <BlogPostForm action='SAVE POST' initialValues={{title:blogPost.title,content:blogPost.content}} onSubmit={(title,content) => {
        editBlogPost(blogPost.id,title,content,() => {navigation.pop()})
    }}/>;
};

const styles = StyleSheet.create({
});

export default EditScreen;