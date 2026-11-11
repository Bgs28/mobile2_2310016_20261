import { Image, View } from "react-native";

export default function Gambar() {
  return (
    <View>
      <Image source={require("../../assets/images/foto/Foto.jpeg")} />
    </View>
  );
}
