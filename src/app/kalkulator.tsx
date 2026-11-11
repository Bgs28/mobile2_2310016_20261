import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function Kalkulator() {
  const [satu, setSatu] = useState("");
  const [dua, setDua] = useState("");
  const [hasil, setHasil] = useState<number | null>(null);

  const hitungKalkulator = (operator: string) => {
    const num1 = parseFloat(satu);
    const num2 = parseFloat(dua);

    // validasi input
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert("masukkan angka yang valid");
      return;
    }

    const tambah = (a: number, b: number) => a + b;
    const kurang = (a: number, b: number) => a - b;
    const kali = (a: number, b: number) => a * b;
    const bagi = (a: number, b: number) => {
      if (b === 0) {
        Alert.alert("Tidak bisa membagi angka nol!");
        return 0;
      }
      return a / b;
    };

    let res = 0;
    switch (operator) {
      case "+":
        res = tambah(num1, num2);
        break;
      case "-":
        res = kurang(num1, num2);
        break;
      case "*":
        res = kali(num1, num2);
        break;
      case "/":
        res = bagi(num1, num2);
        break;
      default:
        return;
    }

    setHasil(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KALKULATOR</Text>

      {/* Input Angka Pertama */}
      <Text style={styles.label}>Angka Pertama</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#94a3b8"
        value={satu}
        onChangeText={(text) => setSatu(text)}
        keyboardType="numeric"
      />

      {/* Input Angka Kedua*/}
      <Text style={styles.label}>Angka Kedua</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="#94a3b8"
        value={dua}
        onChangeText={(text) => setDua(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Hasil</Text>
      <Text style={styles.hasil}>{hasil !== null && hasil}</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => hitungKalkulator("+")}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => hitungKalkulator("-")}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => hitungKalkulator("*")}>
          <Text style={styles.buttonText}>x</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => hitungKalkulator("/")}>
          <Text style={styles.buttonText}>:</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setSatu("");
            setDua("");
            setHasil(null);
          }}
        >
          <Text style={styles.buttonText}>CE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    backgroundColor: "#0865fc",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 20,
    marginBottom: 20,
    color: "white",
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 500,
    color: "black",
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#0f172a",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#ffa220",
    paddingVertical: 10,
    borderRadius: 8,
    height: 50,
    width: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hasil: {
    fontSize: 20,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
