import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* BAGIAN 1: HEADER ATAS (Susunan ke samping dengan space-between) */}
      <View style={styles.topBar}>
        <Text style={styles.campusName}>KARTU MAHASISWA DIGITAL</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>AKTIF</Text>
        </View>
      </View>
      {/* BAGIAN 2: KARTU PROFIL UTAMA */}
      <View style={styles.card}>
        {/* Baris Atas Kartu: Foto di Kiri, Nama & NIM di Kanan */}
        <View style={styles.profileRow}>
          <Image
            source={require("../../assets/images/foto/Foto.jpeg")}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.studentName}>Katon Bagas Tri Eryo</Text>
            <Text style={styles.studentNim}>NIM: 2310016</Text>
            <Text style={styles.studentMajor}>S1 Sistem Informasi</Text>
          </View>
        </View>
        {/* Garis Pemisah */}
        <View style={styles.divider} />
        {/* Baris Statistik: 3 Kolom Sejajar di Bawah */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>Semester 7</Text>
            <Text style={styles.statLabel}>Tingkat</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>3.95</Text>
            <Text style={styles.statLabel}>IPK Sementara</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>96 SKS</Text>
            <Text style={styles.statLabel}>Total SKS</Text>
          </View>
        </View>
      </View>
      {/* BAGIAN 3: KOTAK INFORMASI TAMBAHAN (Grid 2 Kotak Sejajar) */}
      <Text style={styles.sectionTitle}>Jadwal Praktikum Hari Ini</Text>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleCard}>
          <Text style={styles.courseTime}>13:30 - 14:45 WIB</Text>
          <Text style={styles.courseTitle}>Pemrograman Mobile</Text>
          <Text style={styles.courseRoom}>Lab Komputer 2</Text>
        </View>
        <View style={styles.scheduleCard}>
          <Text style={styles.courseTime}>15:00 - 17:00 WIB</Text>
          <Text style={styles.courseTitle}>Jaringan Komputer</Text>
          <Text style={styles.courseRoom}>Lab Jaringan 1</Text>
        </View>
        <View style={styles.scheduleCard}>
          <Text style={styles.courseTime}>17:15 - 18:50 WIB</Text>
          <Text style={styles.courseTitle}>Jaringan Komputer</Text>
          <Text style={styles.courseRoom}>Lokal 1</Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          height: 100,
        }}
      >
        <Text>Dicetak otomatis oleh Sistem Informasi Akademik</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  // Wadah utama layar penuh
  screen: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 20,
  },
  // Header atas: menyusun teks judul di kiri dan badge status di kanan
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 8,
  },
  campusName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    letterSpacing: 0.5,
  },
  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: "#15803D",
    fontSize: 12,
    fontWeight: "bold",
  },
  // Kartu Profil Mahasiswa
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  profileRow: {
    flexDirection: "row", // Foto dan biodata berjejer ke samping
    alignItems: "center", // Rata tengah secara vertikal
    gap: 16, // Jarak antara foto dan teks
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38, // Setengah dari width/height agar gambar menjadi bulat penuh
    backgroundColor: "#E2E8F0",
  },
  profileInfo: {
    flex: 1, // Mengambil sisa ruang di sebelah kanan foto
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 4,
  },
  studentNim: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 4,
  },
  studentMajor: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2563EB",
  },
  // Garis pemisah horizontal
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 18,
  },
  // Baris 3 kolom statistik (Semester, IPK, SKS)
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statBox: {
    alignItems: "center", // Teks nilai dan label rata tengah
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: "#64748B",
  },
  // Bagian Jadwal Praktikum
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },
  scheduleContainer: {
    flexDirection: "column", // Dua kartu jadwal berjejer kiri-kanan
    gap: 12,
  },
  scheduleCard: {
    flex: 0, // Masing-masing kartu membagi lebar sama rata (50% : 50%)
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2563EB",
  },
  courseTime: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 6,
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 4,
  },
  courseRoom: {
    fontSize: 12,
    color: "#64748B",
  },
});
