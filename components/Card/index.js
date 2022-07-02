import React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

const Card = ({ titulo, children }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.card_titulo}>{titulo}</Text>
            {children}
        </View>

    )
};

export default Card