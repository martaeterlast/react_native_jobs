import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlessPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlessPress} >
      <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn