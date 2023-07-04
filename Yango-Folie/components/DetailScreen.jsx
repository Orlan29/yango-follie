import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import { ScrollView, SafeAreaView, StyleSheet, ImageBackground, Text, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RoundedButton from "./RoundedButton";
import MenuSectionItem from "./MenuSectionItem";
import MenuItem from "./MenuItem";
import { getDetail } from '../query/detail';
import Loader from './Loader';



export default function DetailScreen({ navigation, route}) {
    const screenWidth = Dimensions.get("window").width;
    const cardWith = (screenWidth - 30) / 2;

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function fetchData() {
            setLoading(true);
            const restaurantData = await getDetail(route.params.restaurant.id);
          
            setMenus(restaurantData.menus);
            setLoading(false);
        })();
    }, []);

    return (
        <>
            {loading && <Loader />}
            {!loading && <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground source={{ uri: route.params.restaurant.banner }} style={styles.restoBg}>
                        <View style={styles.wrapperTop}>
                            <RoundedButton
                                icon="arrow-left"
                                onPress={() => navigation.navigate("Home")}
                            />
                            <View style={styles.roundedButtonWrapper}>
                                <RoundedButton icon="heart" />
                                <RoundedButton icon="search" />
                            </View>
                        </View>
                        <View style={styles.wrapperBottom}>
                            <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold', marginVertical: 15 }}>{ route.params.restaurant.name }</Text>
                            <View style={styles.reviewWrapper}>
                                <FontAwesome size={16} color="#000" name="star" />
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>{ route.params.restaurant.rating }</Text>
                                    <Text style={{ fontSize: 11, color: '#999' }}>{ route.params.restaurant.reviews }</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.menuWrapper}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            { menus.map((menu, index) => <MenuSectionItem key={index} title={menu.name} />) }
                        </ScrollView>
                        {
                            menus.map((item, index) => (

                                <View key={index}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 15 }}>{ item.name }</Text>
                                    <View style={styles.cardWrapper}>
                                        {
                                            item.menu_items.map((menu, index) => (
                                                <MenuItem
                                                    key={index}
                                                    data={menu}
                                                    width={cardWith}
                                                />
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>}
        </>
    );
}

const styles = StyleSheet.create({
    restoBg: {
        height: 300,
        width: '100%',
        justifyContent: 'space-between'
    },
    wrapperTop: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    roundedButtonWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 85,
    },
    reviewWrapper: { 
        backgroundColor: "#fff", 
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15, 
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        alignSelf: "flex-start",
        gap: 20,
    },
    wrapperBottom: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        bottom: 30
    },
    menuWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        bottom: 30
    },
    cardWrapper: {
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        paddingVertical: 10
    }
});