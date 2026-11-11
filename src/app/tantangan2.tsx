import { StyleSheet, Text, View } from "react-native";

export default function Tantangana1() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "gray",
        }}
      >
        <Text></Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Text></Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    // --- AREA EKSPERIMEN SISWA --
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // ----------------------------
  },
  layer1: { backgroundColor: "#636161" },
  layer2: {},
});
