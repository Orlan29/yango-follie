import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CategoryItem from "../components/CategoryItem";
import PromoItem from "../components/PromoItem";
import RestaurantItem from "../components/RestaurantItem";
import { getRestaurants } from "../query/restaurant";
import { getCategories } from "../query/category";
import Loader from "../components/Loader";

function HomeScreen({ navigation }) {
  const flex1 = { flex: 1 };
  const flex2 = { flex: 2 };
  const width = { width: 100 };
  const image = {
    uri: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/hamburger-day1.jpg",
  };

  const widthObject = {
    width: width,
    flex1: flex1,
    flex2: flex2,
  };

  const [restaurants, setRestaurant] = useState([]);
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      setLoading(true);

      const restaurantData = await getRestaurants();
      const categoryData = await getCategories();
      
      setRestaurant(restaurantData);
      setCategory(categoryData);
      setLoading(false);
    })();

  }, []);


  return (
    <>
      {loading && <Loader />}
      {!loading && <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 30 }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.positionWrapper}>
            <Text>Zone Industrielle</Text>
            <Text>Livraison</Text>
          </View>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} />
              <Text style={styles.text}>Rechercher</Text>
            </View>
          </TouchableOpacity>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <CategoryItem />
            {
              categories.map((cat, index) => (
                <CategoryItem key={index} data={cat} />
              ))
            }
          </ScrollView>

          <View style={styles.promoContainer}>
            <PromoItem width={widthObject.flex2} image={image} />
            <PromoItem width={widthObject.flex1} image={image} />
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.promoContainer}>
              <PromoItem width={widthObject.width} image={image} />
              <PromoItem width={widthObject.width} image={image} />
              <PromoItem width={widthObject.width} image={image} />
              <PromoItem width={widthObject.width} image={image} />
              <PromoItem width={widthObject.width} image={image} />
            </View>
          </ScrollView>

          { restaurants.map((item, index) => (
            <RestaurantItem
              key={index}
              data={item}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </SafeAreaView> }
    </>
    
  );
}

const styles = StyleSheet.create({
  positionWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  searchBar: {
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    flexDirection: "row",
    gap: 4,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  },
  awsomeContainer: {
    flex: 1,
    backgroundColor: "#ccc",
    height: 5,
    width: 50,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textIcon: { 
    width: 50, 
    textAlign: "center" 
  },
  promoContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
  img: {
    width: "100%",
    height: 95,
    borderRadius: 10,
  },
  restoBg: {
    height: 190,
    width: "100%",
    justifyContent: "space-between",
  },
  favorisBtn: {
    width: 36,
    height: 36,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
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

export default HomeScreen;
