// components/GameScreen.js
// Shared wrapper used by every game screen.
// Renders a coloured header with a back button, title, and a content area.

import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

/**
 * @param {string} title     - Game name shown in the header
 * @param {string} emoji     - Emoji shown beside the title
 * @param {string} color     - Hex color for the header strip
 * @param {React.ReactNode} children - Game content rendered below the header
 */
export default function GameScreen({ title, emoji, color = "#4D96FF", children }) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* ── Header ── */}
      <View style={[styles.header, { backgroundColor: color }]}>

        {/* Back button — pops this screen and returns to Home */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
          activeOpacity={0.75}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{emoji} {title}</Text>
      </View>

      {/* ── Game Content ── */}
      <View style={styles.content}>
        {children}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8E7" },
  header:    { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 20,
               flexDirection: "row", alignItems: "center" },
  backBtn:   { backgroundColor: "rgba(255,255,255,0.3)", borderRadius: 20,
               paddingHorizontal: 14, paddingVertical: 8, marginRight: 16 },
  backText:  { color: "#fff", fontWeight: "600", fontSize: 15 },
  title:     { color: "#fff", fontSize: 22, fontWeight: "700" },
  content:   { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
});
