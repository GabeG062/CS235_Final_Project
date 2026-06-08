// app/game/minesweeper.js
// Screen 3 — Minesweeper
// Static 6×8 grid with mine counter and timer. No game logic yet.

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GameScreen from "../../components/GameScreen";

const ROWS = 8;
const COLS = 6;

export default function Minesweeper() {
  return (
    <GameScreen title="Minesweeper" emoji="💣" color="#6BCB77">

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>MINES</Text>
          <Text style={styles.statValue}>💣 10</Text>
        </View>
        <TouchableOpacity style={styles.smiley} activeOpacity={0.8}>
          <Text style={{ fontSize: 28 }}>😊</Text>
        </TouchableOpacity>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>TIME</Text>
          <Text style={styles.statValue}>⏱ 0</Text>
        </View>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {Array.from({ length: ROWS }, (_, row) => (
          <View key={row} style={styles.gridRow}>
            {Array.from({ length: COLS }, (_, col) => (
              <TouchableOpacity key={col} style={styles.cell} activeOpacity={0.6} />
            ))}
          </View>
        ))}
      </View>

    </GameScreen>
  );
}

const styles = StyleSheet.create({
  statsRow: { flexDirection: "row", justifyContent: "space-between",
              alignItems: "center", width: "100%", marginBottom: 16 },
  statBox:  { backgroundColor: "#6BCB77", borderRadius: 16, paddingHorizontal: 20,
              paddingVertical: 10, alignItems: "center" },
  statLabel:{ color: "#fff", fontSize: 11, fontWeight: "600" },
  statValue:{ color: "#fff", fontSize: 20, fontWeight: "700" },
  smiley:   { backgroundColor: "#fff", borderRadius: 30, width: 52, height: 52,
              alignItems: "center", justifyContent: "center",
              shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  grid:     { backgroundColor: "#fff", borderRadius: 24, padding: 8,
              shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  gridRow:  { flexDirection: "row" },
  cell:     { width: 42, height: 42, margin: 2, backgroundColor: "#ddd", borderRadius: 8 },
});
