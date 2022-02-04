import { StyleSheet, Text, View, Image, Pressable, Button } from "react-native";

export function Product({
  children,
  name,
  price,
  photoSource,
  onDeletePress,
  onAddPress,
  count,
}) {
  return (
    <View style={styles.wrapper}>
      <Image
        style={{ borderRadius: 20 }}
        source={{
          uri: photoSource,
          width: 85,
          height: 85,
        }}
      />
      <View
        style={{
          marginRight: 25,
          marginTop: 10,
          alignItems: "flex-start",
        }}
      >
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>تعداد : {count}</Text>
        <View style={styles.button}>
          <View style={{ marginLeft: 20 }}>
            <Button title="حذف" color="#c90000" onPress={onDeletePress} />
          </View>
          <View>
            <Button title="+" color="#0041ba" onPress={onAddPress} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#CEE5D0",
    height: 100,
    marginTop: 20,
    width: 300,
    height: 200,
    padding: 20,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    marginTop: 10,
  },
});
