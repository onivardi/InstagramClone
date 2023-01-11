import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import fonts from "../../themes/fonts";

export default StyleSheet.create({
    icon: {
        marginHorizontal: 5
    },
    commentText: {
        color: colors.black,
        lineHeight: 18,
    },
    bold: {
        fontWeight: fonts.weight.bold
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})