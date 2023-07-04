import React from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity, View } from "react-native";

function PromoItem({ width, image, onPress = null }) {
  return (
    <View style={width}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image resizeMode="cover" style={styles.img} source={image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  img: {
    width: "100%",
    height: 95,
    borderRadius: 10,
  },
};

export default PromoItem;
