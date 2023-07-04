import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function CategoryItem({ data, onPress }) {
  const displayImage =
    data ? (
      <Image
        style={styles.tinyLogo}
        source={{ uri: data.picture }}
      />
    ) : ( <FontAwesome name="sliders" size={24} color="black" /> );

  return (
    <View style={{ height: 70 }}>
      <TouchableOpacity activeOpacity={0.7} style={{ alignSelf: "flex-start" }}>
        <View style={{ flex: 1 }}>
          <View
            style={ (!data) ? styles.awsomeContainer1 : styles.awsomeContainer }
          >
            {displayImage}
          </View>
          <View>
            <Text numberOfLines={1} style={styles.textIcon}>{data ? data.name : "Filtre"}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  awsomeContainer1: {
    flex: 1,
    backgroundColor: "#ccc",
    height: 5,
    width: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  awsomeContainer: {
    flex: 1,
    height: 5,
    width: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  textIcon: { width: 60, textAlign: "center" },
  tinyLogo: {
    width: 50,
    height: 50,
  },
};

export default CategoryItem;
