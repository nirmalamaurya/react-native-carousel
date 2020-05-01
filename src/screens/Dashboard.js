import React, { useEffect } from "react";
import { Text, Dimensions, Image, View, StyleSheet } from "react-native";
import Carousel from "react-native-banner-carousel";
const Dashobard = () => {

  const bannerWidth = Dimensions.get("window").width;
  const bannerHeight = 260;

  const images = ["1", "2", "3", "4"];

  

  const displayImage = images.map((item, key) => (
    <Image source={require(`../../assets/2.jpg`)} style={styles.image} />
  ));

  return (
    <View style={styles.container}>
      <Text>This is Dashboard</Text>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={bannerWidth}
      >
        {displayImage}
      </Carousel>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 500,
    height: 500,
  },
});
export default Dashobard;
