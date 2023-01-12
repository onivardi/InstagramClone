import React, { useState } from 'react';
import { Image, Text, View, Pressable, TouchableOpacity } from 'react-native';

import { colors } from '../../themes/colors';
import styles from './styles';

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Comment from '../Comment/Comment';

import { IPost } from '../../types/models';

import DoublePressable from '../DoublePress';


type FeedPostType = {
    post: IPost
}

const FeedPost = ({ post }: FeedPostType) => {
    const [expandDescription, setExpandDescription] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const toggleDescriptionExpand = () => {
        setExpandDescription(currentValue => !currentValue);
    }

    const toggleLiked = () => {
        setIsLiked(currentValue => !currentValue);
    }

    

    return (
        <View style={styles.post}>

            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: post.user.image }}
                    style={styles.userAvatar} />
                <Text style={styles.userName}>{post.user.username}</Text>

                <Entypo name='dots-three-horizontal' size={16} />
            </View>

            {/* Content */}

            <DoublePressable onDoublePress={toggleLiked}>
                <Image source={{uri: post.image}}style={styles.image}/>
            </DoublePressable>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <Pressable onPress={toggleLiked}>
                        <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} style={styles.icon} color={isLiked ? colors.accent : colors.black} />
                    </Pressable>
                    <Ionicons name='chatbubble-outline' size={24} style={styles.icon} color={colors.black} />
                    <Feather name='send' size={24} style={[styles.icon, { flexGrow: 1 }]} color={colors.black} />
                    <Feather name='bookmark' size={24} color={colors.black} />
                </View>

                {/* Likes */}
                <Text>Liked by <Text style={styles.bold}>
                    lgrinevicius</Text> and <Text style={styles.bold}>{post.nofLikes} other</Text>
                </Text>

                {/* Post description */}
                <Text style={styles.text} numberOfLines={expandDescription ? 0 : 3}>
                    <Text style={styles.bold}>{post.user.username} </Text>
                    {post.description}
                </Text>
                <Text onPress={toggleDescriptionExpand}>{expandDescription ? 'less' : 'more'}</Text>

                {/* Comments */}
                <Text>View all {post.comments.length} comments</Text>
                {post.comments.map(comment => (
                    <Comment comment={comment} key={comment.id} />
                ))}


                {/* Posted date */}
                <Text>{post.createdAt}</Text>
            </View>
        </View>
    )
};



export default FeedPost;