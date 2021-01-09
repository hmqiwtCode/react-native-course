import React, {useContext} from "react";
import {View, Text, StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find(post => {return post.id === navigation.getParam('id')});
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : (
            <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}><EvilIcons size={30} name='pencil' /></TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    
});

export default ShowScreen;