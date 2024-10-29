import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TVDetail() {
  const item = useLocalSearchParams();
  const { id, name, price, imageId } = item;

  const imageSource = (() => {
    switch (imageId) {
      case "1":
        return require("../tv/images/photo1.jpg");
      case "2":
        return require("../tv/images/photo2.jpg");
      case "3":
        return require("../tv/images/photo3.jpg");
      case "4":
        return require("../tv/images/photo4.jpg");
      case "5":
        return require("../tv/images/photo5.jpg");
      default:
        return null;
    }
  })();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "lightgray", width: 520, height: 550}}>
        <View style={{ alignItems: "center" }}>
          {imageSource && (
            <Image
              style={{ width: 400, height: 200, marginTop: 40 }}
              source={imageSource}
            />
          )}
        </View>
        <Text style={styles.khung}>{id}</Text>
        <Text style={styles.khung}>{name}</Text>
        <Text style={styles.khung}>{price}</Text>
        <View style={{margin:10}}>
        <Button
          title="Đặt hàng"
          onPress={() => alert("Đã đặt hàng thành công!")}
        /></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  khung: {
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    color: "black",
    fontSize: 20,
  },
});
