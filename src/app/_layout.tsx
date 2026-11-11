// import { Stack } from "expo-router";

// export default function RootLayout() {
//   // return <Stack />;
//   return (
//     <Stack>
//       {/* Konfigurasi Header untuk Layar index */}
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerTitleAlign: "center",
//         }}
//       />
//     </Stack>
//   );
// }

import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      {/* Sembunyikan header stack agar header Tabs yang tampil */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
