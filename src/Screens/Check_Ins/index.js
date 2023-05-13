import { View, FlatList } from 'react-native'
import React from 'react'
import { useQuery } from '@apollo/client';
import { CardView } from '../../Components/Custom_Card';
import { Loader } from '../../Components/Custom_Loader';
import { My_Query } from '../../API/GraphQL';
import { HandleError } from '../../Components/Handle_Error';

export default function Check_Ins() {

  const { loading, error, data } = useQuery(My_Query);
  const check_in = data?.check_in || [];

  if (loading) { return <Loader /> }
  if (error) { return <HandleError error={error} /> }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={check_in}
        renderItem={({ item }) => <CardView item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
