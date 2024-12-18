import { Grid } from "@ant-design/react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ScrollView>
      <View style={[{ margin: 10 }]}>
        <Text>Simple</Text>
      </View>
      <View style={[{ padding: 10 }]}>
        <Grid data={data} hasLine={false} />
      </View>

      <View style={[{ margin: 10 }]}>
        <Text>Carousel</Text>
      </View>
      <Grid
        data={data}
        columnNum={3}
        isCarousel
        carouselProps={{
          style: {
            width: "100%",
            height: 320,
          },
        }}
        onPress={(_el: any, index: any) => alert(index)}
      />
      <View style={[{ margin: 10 }]}>
        <Text>Custom GridCell Style</Text>
      </View>
      <Grid
        data={data}
        columnNum={3}
        itemStyle={{ height: 150, backgroundColor: "#ffff00" }}
      />
    </ScrollView>
  );
};

export default ProductsPage;
