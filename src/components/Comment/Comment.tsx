import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from '../../themes/colors';
import { IComment } from '../../types/models';
import styles from './styles';

type CommentType = {
    comment: IComment
}


const Comment = ({comment}: CommentType) => {
    return (        
        <View style={styles.comment}>           
            <Text style={styles.commentText}>
                <Text style={styles.bold}>{comment.user.username} </Text> 
                {comment.comment}
            </Text>
            <AntDesign name='hearto' style={styles.icon} color={colors.black} />
        </View>
    )
}

export default Comment