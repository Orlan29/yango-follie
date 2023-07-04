import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import RoundedButton from "./RoundedButton";

function RestaurantItem({ data, navigation }) {


  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Detail", { restaurant: data })}>
        <View>
          <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <ImageBackground
              style={styles.restoBg}
              source={{ uri: data.banner }}
            >
              <View style={styles.wrapperTop}>
                <View style={styles.alerte}>
                  <View style={styles.alerteIcon}>
                    <FontAwesome5 size={16} color="#fff" name="walking" />
                  </View>
                  <Text style={{ fontWeight: "bold" }}>Livraison gratuite</Text>
                </View>

                <RoundedButton icon="heart" />
              </View>

              <View>
                <View style={styles.duration}>
                  <FontAwesome5 size={20} color="#fff" name="bicycle" />
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      marginLeft: 6,
                    }}
                  >
                    {data.status}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>{data.name}</Text>
          <View style={styles.reviewsWrapper}>
            <FontAwesome size={16} color="#666" name="star" />
            <Text>{data.rating} ({ data.reviews })</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  restoBg: {
    height: 190,
    width: "100%",
    justifyContent: "space-between",
  },
  alerte: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 6,
    alignSelf: "flex-start",
    borderRadius: 50,
  },
  alerteIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#03a503",
    borderRadius: 80,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperTop: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duration: {
    backgroundColor: "#000",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: "flex-end",
    flexDirection: "row",
    padding: 10,
  },
  reviewsWrapper: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

export default RestaurantItem;
