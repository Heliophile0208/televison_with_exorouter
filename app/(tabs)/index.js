import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
const tvList = [
  {
    id: 1,
    name: "Smart Tivi Cong Samsung 49 inch",
    price: "22,900,000 VND",
    image: require("../../tv/images/photo1.jpg"),
    imageId:1
  },
  {
    id: 2,
    name: "Internet Tivi Sony 4K 43 inch",
    price: "14,500,000 VND",
    image: require("../../tv/images/photo2.jpg"),
    imageId:2
  },
  {
    id: 3,
    name: "Internet Tivi Samsung 32 inch",
    price: "6,890,000 VND",
    image: require("../../tv/images/photo3.jpg"),
    imageId:3
  },
  {
    id: 4,
    name: "Internet Tivi Sony 40 inch",
    price: "9,990,000 VND",
    image: require("../../tv/images/photo4.jpg"),
    imageId:4
  },
  {
    id: 5,
    name: "Smart Tivi Samsung 40 inch",
    price: "8,640,000 VND",
    image: require("../../tv/images/photo5.jpg"),
    imageId:5
  },
];

export default function TVList() {
  const HandlePress = (tv) => {
    router.push({
      pathname: "../details",
      params: {
        id: tv.id,
        name: tv.name,
        price: tv.price,
        imageId:tv.imageId
      },
    })
  };
  return (
    <View style={{padding:10}}>
      <Text
        style={{
          fontWeight: "bold",
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
        }}
      >
        Danh sách Tivi
      </Text>
      {tvList.map((tv) => (
        <TouchableOpacity
          key={tv.id}
          onPress={() => HandlePress(tv)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor:'Gray',
              padding:10
            }}
          >
            <Image
              source={tv.image }
              style={{ width: 200, height: 100 }}
            />
            <View style={{marginLeft:20}}>
              <Text>{tv.name}</Text>
              <Text style={{marginTop:10}}>Đơn giá: {tv.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View><Text style={{textAlign:"center", fontWeight:'bold', fontSize:20}}>Màn hình danh sách tivi</Text></View>
    </View>
  );
}
