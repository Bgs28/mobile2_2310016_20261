import { StyleSheet, Text, View } from "react-native";

export default function Tantangana1() {
  return (
    <View style={styles.container}>
      {/* Kotak 1: Merah */}
      <View style={[styles.box, styles.boxRed]}>
        <Text style={styles.text}>1</Text>
      </View>
      {/* Kotak 2: Hijau */}
      <View style={[styles.box, styles.boxGreen]}>
        <Text style={styles.text}>2</Text>
      </View>
      {/* Kotak 3: Biru */}
      <View style={[styles.box, styles.boxBlue]}>
        <Text style={styles.text}>3</Text>
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
    alignItems: "flex-start",
    // ----------------------------
  },
  box: {
    width: 0,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  boxRed: { flex: 1, backgroundColor: "#e74c3c" },
  boxGreen: { flex: 2, backgroundColor: "#2ecc71" },
  boxBlue: { flex: 1, backgroundColor: "#3498db" },
  text: { color: "#ffffff", fontSize: 24, fontWeight: "bold" },
});
