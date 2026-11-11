import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 100,
          height: 100,
        }}
      >
        <Text>Hello World</Text>
      </View>
    </View>
  );
}
