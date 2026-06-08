// app/game/tictactoe.js
// Screen 2 — Tic-Tac-Toe
// Static 3×3 board layout. No game logic yet.

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GameScreen from "../../components/GameScreen";

export default function TicTacToe() {
  return (
    <GameScreen title="Tic-Tac-Toe" emoji="⭕" color="#FF6B6B">

      <Text style={styles.turn}>Player X's turn</Text>

      {/* 3×3 grid */}
      <View style={styles.board}>
        {[0, 1, 2].map((row) => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map((col) => (
              <TouchableOpacity
                key={col}
                style={[
                  styles.cell,
                  col < 2 && styles.borderRight,
                  row < 2 && styles.borderBottom,
                ]}
                activeOpacity={0.6}
              >
                {/* Cell content goes here when game logic is added */}
                <Text style={styles.cellText} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnText}>New Game</Text>
      </TouchableOpacity>

    </GameScreen>
  );
}

const styles = StyleSheet.create({
  turn:        { fontSize: 22, fontWeight: "700", color: "#444", marginBottom: 24 },
  board:       { backgroundColor: "#fff", borderRadius: 24, padding: 12,
                 shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  row:         { flexDirection: "row" },
  cell:        { width: 90, height: 90, alignItems: "center", justifyContent: "center" },
  borderRight: { borderRightWidth: 3, borderRightColor: "#eee" },
  borderBottom:{ borderBottomWidth: 3, borderBottomColor: "#eee" },
  cellText:    { fontSize: 44, fontWeight: "700", color: "#FF6B6B" },
  btn:         { marginTop: 32, backgroundColor: "#FF6B6B", borderRadius: 30,
                 paddingHorizontal: 40, paddingVertical: 14 },
  btnText:     { color: "#fff", fontSize: 17, fontWeight: "700" },
});
