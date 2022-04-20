import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/cartSlice";


export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch =useDispatch();
  console.log(items, "state data in cart");

  const CartItem = ({ item, index }) => {
    return (
      <View key={item.id} style={{ flexDirection: "row" ,  borderBottomWidth:1,
      borderColor:'#E5E3E4',
      marginVertical:15,
      paddingVertical:5}}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 70, width: "20%" }}
          resizeMode='contain'
        />
        <View
          style={{
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text numberOfLines={1}>{item.title}</Text>
          <Text style={{ fontWeight: "bold" }} numberOfLines={1}>
            $ {item.price}
          </Text>
        </View>
        <View
          style={{
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 30,
              width: "90%",
              backgroundColor: "#FC6078",
              alignItems: "center",
              justifyContent: "center",
              borderRadius:12
            }}
          >
            <Text onPress={()=>dispatch(removeProduct(item.id))} style={{color:'white'}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cart}>
      {/* {items.map((item, index) => (
        <CartItem item={item} index={index} />
      ))} */}
      <FlatList 
        data={items}
        renderItem={({item, index})=> <CartItem index={index} item={item}/>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text style={{justifyContent:'center', textAlign:'center'}}>Empty Cart</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    justifyContent: "center",
    marginHorizontal:10
  },
});
