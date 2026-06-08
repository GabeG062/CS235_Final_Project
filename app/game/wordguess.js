// app/game/wordguess.js
// Screen 4 — Word Guess (Wordle-style)
// Static letter tiles and QWERTY keyboard. No game logic yet.

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GameScreen from "../../components/GameScreen";

const WORD_LENGTH = 5;

const KEYBOARD_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["↵","Z","X","C","V","B","N","M","⌫"],
];

export default function WordGuess() {
  return (
    <GameScreen title="Word Guess" emoji="🔤" color="#4D96FF">

      <Text style={styles.hint}>Guess the 5-letter word!</Text>

      {/* Letter tiles */}
      <View style={styles.tilesRow}>
        {Array.from({ length: WORD_LENGTH }, (_, i) => (
          <View key={i} style={styles.tile}>
            <Text style={styles.tileLetter} />
          </View>
        ))}
      </View>

      <Text style={styles.attempts}>6 attempts remaining</Text>

      {/* On-screen keyboard */}
      <View style={styles.keyboard}>
        {KEYBOARD_ROWS.map((row, ri) => (
          <View key={ri} style={styles.keyRow}>
            {row.map((letter) => (
              <TouchableOpacity
                key={letter}
                style={[styles.key, (letter === "↵" || letter === "⌫") && styles.keyWide]}
                activeOpacity={0.7}
              >
                <Text style={styles.keyText}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

    </GameScreen>
  );
}

const styles = StyleSheet.create({
  hint:      { color: "#888", fontSize: 14, marginBottom: 16 },
  tilesRow:  { flexDirection: "row", marginBottom: 12 },
  tile:      { width: 52, height: 52, marginHorizontal: 4, borderWidth: 2,
               borderColor: "#4D96FF", borderRadius: 12, alignItems: "center",
               justifyContent: "center", backgroundColor: "#fff",
               shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 4, elevation: 2 },
  tileLetter:{ fontSize: 24, fontWeight: "700", color: "#4D96FF" },
  attempts:  { color: "#aaa", fontSize: 12, marginBottom: 20 },
  keyboard:  { backgroundColor: "#fff", borderRadius: 24, padding: 10, width: "100%",
               shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  keyRow:    { flexDirection: "row", justifyContent: "center", marginBottom: 4 },
  key:       { width: 30, height: 42, marginHorizontal: 2, backgroundColor: "#f0f0f0",
               borderRadius: 8, alignItems: "center", justifyContent: "center" },
  keyWide:   { width: 44 },
  keyText:   { fontSize: 12, fontWeight: "700", color: "#444" },
});
