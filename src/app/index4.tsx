import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Halaman() {
  return (
    <View style={styles.container}>
      <Link href="/tantangan1" style={styles.navButton}>
        Menuju Halaman tantangan 1 →
      </Link>
      <Link href="/tantangan2" style={styles.navButton}>
        Menuju Halaman tantangan 2 →
      </Link>
      <Link href="/tantangan3" style={styles.navButton}>
        Menuju Halaman tantangan 3 →
      </Link>
    </View>
  );
  // <View style={styles.container}>
  //   {/* Kotak 1: Merah */}
  //   <View style={[styles.box, styles.boxRed]}>
  //     <Text style={styles.text}>1</Text>
  //   </View>
  //   {/* Kotak 2: Hijau */}
  //   <View style={[styles.box, styles.boxGreen]}>
  //     <Text style={styles.text}>2</Text>
  //   </View>
  //   {/* Kotak 3: Biru */}
  //   <View style={[styles.box, styles.boxBlue]}>
  //     <Text style={styles.text}>3</Text>
  //   </View>
  // </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    // --- AREA EKSPERIMEN SISWA --
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // ----------------------------
  },

  navButton: {
    backgroundColor: "#072deb",
    color: "#ffffff",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    fontWeight: "bold",
    overflow: "hidden",
  },
});
