// app/game/tictactoe.js
// Screen 2 — Tic-Tac-Toe
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GameScreen from "../../components/GameScreen";

const WIN_PATTERNS = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6],      
];

export default function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function handlePress(index) {
    if (cells[index] || winner) return;
    const player = isXTurn ? "X" : "O";
    const newCells = [...cells];
    newCells[index] = player;
    setCells(newCells);
    const result = checkWinner(newCells);
    if (result) {
      setWinner(result);
    } else {
      setIsXTurn(!isXTurn);
    }
  }

  function checkWinner(board) {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function resetGame() {
    setCells(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  }

  return (
    <GameScreen title="Tic-Tac-Toe" emoji="⭕" color="#FF6B6B">

      {/* Turn indicator */}
      <Text style={styles.turn}>
        {winner ? `Player ${winner} wins!` : `Player ${isXTurn ? "X" : "O"}'s turn`}
      </Text>

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
                onPress={() => handlePress(row * 3 + col)}
                activeOpacity={0.6}
              >
                <Text style={styles.cellText}>{cells[row * 3 + col]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={resetGame}>
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