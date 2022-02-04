import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Product } from "../components/Product";
export default function App(props) {
  let [products, setProducts] = useState([
    {
      name: "لپ تاپ ایسوس",
      price: "38.000.000 T",
      photoSource: "/images/1.jpg",
      count: 1,
    },
    {
      name: "مک بوک ایر",
      price: "32.000.000 T",
      photoSource: "/images/2.jpg",
      count: 1,
    },
  ]);
  return (
    <View style={{ height: "100vh" }}>
      <View style={styles.header}>
        <View style={styles.cartText}>سبد خرید</View>
      </View>
      <View>
        {products.map((product, index) => (
          <Product
            name={product.name}
            price={product.price}
            photoSource={product.photoSource}
            count={product.count}
            onDeletePress={() => {
              setProducts([
                ...products.slice(0, index),
                ...products.slice(index + 1),
              ]);
            }}
            onAddPress={() => {
              setProducts([
                ...products.slice(0, index),
                { ...products[index], count: products[index].count + 1 },
                ...products.slice(index + 1),
              ]);
            }}
          />
          // same result :
          // <Product {...product} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#ff3378",
  },
  cartText: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: "#FBE5E5",
    marginTop: 25,
    borderRadius: 30,
    fontSize: 25,
  },
});
