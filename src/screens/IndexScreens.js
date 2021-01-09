import React, {useContext} from "react";
import {View, Text, StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const blogPost = useContext(Context);
    const {state, addBlogPost,deleteBlogPost} = blogPost;
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(post) => post.id.toString() }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show',{id : item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                                
                            </View>
                        </TouchableOpacity>);

                }} />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight : <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather size={30} name='plus' /></TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray',
        paddingHorizontal:10
    },
    title : {
        fontSize:18
    },
    icon: {
        fontSize:24
    }
});

export default IndexScreen;