import React from 'react'
import { Pressable } from "react-native";

type DoublePressTypes = {
    children: React.ReactNode,
    onDoublePress: () => void;
}

const DoublePressable = ({ children, onDoublePress = () => {} }: DoublePressTypes) => {
    let lastTap = 0;

    const handleDoubleTap = () => {
        const now = Date.now();
        if (now - lastTap < 300) {
            onDoublePress();
        }
        lastTap = now;
    }

    return (
        <Pressable onPress={handleDoubleTap}>
            {children}
        </Pressable>
    )
}

export default DoublePressable;