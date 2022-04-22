import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct} from '../store/cartSlice'

export default function Product({ item }) {
  const dispatch=useDispatch();

  

  return (
    <View style={{ marginHorizontal: 10,marginVertical:10, height: 250, width: 150,}}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{ height: 150, width: 100, resizeMode: "contain" , alignSelf:'center'}}
      />
      <Text  numberOfLines={2}>{item.title}</Text>
      <Text numberOfLines={2} style={{ fontWeight: "bold", marginTop: 5 }}>
        $ {item.price}
      </Text>
      <TouchableOpacity
         onPress={()=>dispatch(addProduct(item))}
        style={{
          backgroundColor: "pink",
          marginTop: 10,
          alignSelf:'center',
          justifyContent:'center',
          borderRadius:10,
          width:'90%',
          height:39,
          shadowOpacity: 0.25,
        }}
      >
        <Text style={{ fontWeight: "bold" , fontSize:12, textAlign:'center'}}
         
        >Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
