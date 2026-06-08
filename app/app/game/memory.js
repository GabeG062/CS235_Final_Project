// app/game/memory.js
// Screen 5 — Memory Match
// Static 4×4 grid of face-down cards. No game logic yet.

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GameScreen from "../../components/GameScreen";

// 8 emoji pairs — will be revealed when game logic is added
const CARDS = [
  "🌸","🌸","🦊","🦊",
  "🍕","🍕","🚀","🚀",
  "🎸","🎸","🐬","🐬",
  "⚡","⚡","🍦","🍦",
];

export default function MemoryMatch() {
  return (
    <GameScreen title="Memory Match" emoji="🃏" color="#C77DFF">

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>PAIRS</Text>
          <Text style={styles.statValue}>0 / 8</Text>
        </View>
        <TouchableOpacity style={styles.resetBtn} activeOpacity={0.8}>
          <Text style={styles.resetText}>🔄 Reset</Text>
        </TouchableOpacity>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>MOVES</Text>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>

      {/* 4×4 card grid */}
      <View style={styles.grid}>
        {[0, 4, 8, 12].map((rowStart) => (
          <View key={rowStart} style={styles.row}>
            {CARDS.slice(rowStart, rowStart + 4).map((_, col) => (
              <TouchableOpacity key={col} style={styles.card} activeOpacity={0.7}>
                {/* Face-down — shows ? until tapped */}
                <Text style={styles.cardText}>?</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

    </GameScreen>
  );
}

const styles = StyleSheet.create({
  statsRow:  { flexDirection: "row", justifyContent: "space-between",
               alignItems: "center", width: "100%", marginBottom: 16 },
  statBox:   { backgroundColor: "#C77DFF", borderRadius: 16, paddingHorizontal: 20,
               paddingVertical: 10, alignItems: "center" },
  statLabel: { color: "#fff", fontSize: 11, fontWeight: "600" },
  statValue: { color: "#fff", fontSize: 20, fontWeight: "700" },
  resetBtn:  { backgroundColor: "#fff", borderRadius: 20, paddingHorizontal: 20,
               paddingVertical: 10,
               shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  resetText: { color: "#C77DFF", fontWeight: "700", fontSize: 14 },
  grid:      { backgroundColor: "#fff", borderRadius: 24, padding: 8,
               shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  row:       { flexDirection: "row" },
  card:      { width: 64, height: 80, margin: 4, backgroundColor: "#C77DFF",
               borderRadius: 16, alignItems: "center", justifyContent: "center",
               shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 4, elevation: 3 },
  cardText:  { color: "#fff", fontSize: 28, fontWeight: "700" },
});
