import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


export default function Header() {
  const navigation=useNavigation()
  const { count } = useSelector((state) => state.cart);

  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Octicons name="three-bars" size={26} color="black" />
        <Text style={styles.headerName}>Redux Store</Text>
      </View>
      <TouchableOpacity style={styles.cart} onPress={()=>navigation.navigate('Cart')}>
        <Feather name="shopping-cart" size={22} color="black" />
        <View style={styles.badge}>
          <Text style={styles.text}>{count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    backgroundColor: "pink",
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerName: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  cart: {
    flexDirection: "row",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    transform: [{ translateY: -2 }],
  },
  badge: {
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 18,
    backgroundColor: "white",
    transform: [{ translateY: -10 }],
  },
});
