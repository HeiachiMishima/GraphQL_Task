import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment';

export const CardView = ({ item }) => {

  const originalDate = item?.created_at;
  const formattedDate = moment(originalDate).format('Do [of] MMMM YYYY');

  return (
    <View style={styles.Main_View}>
      {item?.image_url &&
        <View style={styles.Image_View}>
          <Image source={{ uri: item?.image_url }} style={styles.Image} resizeMode='cover' />
        </View>}
      <View style={styles.Text_Area}>
        <View style={styles.Avatar}>
          <Ionicons
            name="people"
            size={20}
            color={'white'}
          />
        </View>
        <View style={{ flex: 1, }}>
          <Text style={styles.Desc_Text} >{item?.name}</Text>
          <Text style={styles.Desc_Text} >{formattedDate}</Text>
        </View>
      </View>

      <View style={styles.Comment_Area}>

        {item?.comment ? <Text style={styles.Desc_Text}  numberOfLines={3} >{item?.comment}</Text> : <Text style={styles.Desc_Text}>Lorem ipsum dolor is the dummy text</Text>}

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Main_View: { flex: 1, backgroundColor: 'white', marginHorizontal: '5%', marginVertical: '3%', borderRadius: 10 },
  Image_View: { alignItems: 'center', height: 140, width: '100%', marginTop: '2%' },
  Image: { flex: 1, height: '50%', width: '90%', borderRadius: 6, overflow: 'hidden' },
  Text_Area: { flexDirection: 'row', marginTop: '2%', marginHorizontal: '5%' },
  Avatar: { backgroundColor: 'lightgrey', padding: 6, borderRadius: 8, marginRight: '2%' },
  Desc_Text: { color: '#000', fontSize: 14 },
  Comment_Area: { marginHorizontal: '5%', marginVertical: '2%' }


})

