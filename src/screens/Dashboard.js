import React, { useEffect } from "react";
import { Text, Dimensions, Image, View, StyleSheet } from "react-native";
import Carousel from "react-native-banner-carousel";
const Dashobard = () => {

  const bannerWidth = Dimensions.get("window").width;
  const bannerHeight = 260;

  const images = [
      require("../../assets/1.jpeg"),
      require("../../assets/2.jpeg"),
      require("../../assets/3.jpeg"),
      require("../../assets/4.jpeg"),
      require("../../assets/5.jpeg"),
      require("../../assets/6.jpeg"),
      require("../../assets/7.jpeg")


    ];                 

  
const displayImage = images.map((item)=>
        <Image source={item} style = {styles.image}/>  
    );

  return (
    <View style={styles.container}>
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
    height: 700
  },
});
export default Dashobard;
