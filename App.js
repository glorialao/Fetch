import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await fetch('https://dummyjson.com/products');
      let json = await res.json();
      setData(json.products);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const renderItem = ({item}) => {
    return(
      <View style={{marginTop:10}}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.price}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight:'bold'}}>Fetch Data</Text>
      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}