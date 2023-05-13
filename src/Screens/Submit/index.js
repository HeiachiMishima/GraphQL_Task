import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from './style';
import Custom_Button from '../../Components/Custom_Button';
import { useMutation } from '@apollo/client';
import { Add_check_in } from '../../API/GraphQL';
import Custom_TextInput from '../../Components/Custom_TextInput';

export default function Submit() {

  const [name, setName] = useState()
  const nameRef = useRef()
  const [addCheckIn, { loading, error }] = useMutation(Add_check_in);

  const handleAddCheckIn = async () => {
    try {
      const response = await addCheckIn({
        variables: {
          check_in: {
            name: name,
          },
        },
      });
      console.log(response.data);
      nameRef.current.clear()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.MainViewStyle}>

      <Custom_TextInput
        inputRef={nameRef}
        placeholder='Name'
        onChangeText={setName}
      />

      <Custom_TextInput
        placeholder='Comment'
      />

      <Custom_TextInput
        placeholder='ImageUrl'
      />

      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => { handleAddCheckIn() }}
      >
        <Custom_Button Title={loading ? <ActivityIndicator size={'small'} color={'#ffffff'} /> : 'ADD'} />
      </TouchableOpacity>
    </View>
  );
}
