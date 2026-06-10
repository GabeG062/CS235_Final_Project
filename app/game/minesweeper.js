// app/game/minesweeper.js
// Screen 3 — Minesweeper
// Static 6×8 grid with mine counter and timer. No game logic yet.

import { View, Text, TouchableOpacity, StyleSheet, useState } from "react-native";
import GameScreen from "../../components/GameScreen";

const ROWS = 8;
const COLS = 6;
const [board, setBoard] = useState(() => generateBoard());


function generateBoard()
      {
        const cells = Array.from({ length: ROWS * COLS});

        for (let i = 0; i < cells.length; i++)
        {
          cells[i] =
          {
            index: i,
            hasMine: false,
            isRevealed: false,
            neighborCount: 0
          };
        }
        let minesPlaced = 0
        while (minesPlaced <= 10)
        {
          const rand = Math.floor(Math.random() * cells.length);
          if (cells[rand].hasMine = false)
          {
            cells[rand].hasMine == true;
            minesPlaced++;
          }
        }
        cells.forEach((cell, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;
          if (cell.hasMine == true)
          {
            if (row - 1 >= 0 && col - 1 >= 0)
            {/*top left*/
              cells[(row - 1) * COLS + (col - 1)].neighborCount++;
            }
            if (row - 1 >= 0)
            {/*top*/
              cells[(row - 1) * COLS + (col)].neighborCount++;
            }
            if (row - 1 >= 0 && col + 1 <= 5)
            {/*top right*/
              cells[(row - 1) * COLS + (col + 1)].neighborCount++;
            }
            if (col - 1 >= 0)
            {/*left*/
              cells[(row) * COLS + (col - 1)].neighborCount++;
            }
            if (col + 1 <= 5)
            {/*right*/
              cells[(row) * COLS + (col + 1)].neighborCount++;
            }
            if (row + 1 <= 7 && col - 1 >= 0)
            {/*bottom left*/
              cells[(row + 1) * COLS + (col - 1)].neighborCount++;
            }
            if (row + 1 <= 7)
            {/*bottom*/
              cells[(row + 1) * COLS + (col)].neighborCount++;
            }
            if (row + 1 <= 7 && col + 1 <= 5)
            {/*bottom right*/
              cells[(row + 1) * COLS + (col + 1)].neighborCount++;
            }
          }
        });
        return cells;
      }

      function handlePress(index)
      {
        const cell = board[index];
        if (cell.isRevealed) return;
        const newBoard = [...board];
        newBoard[index] = {...cell, isRevealed: true};
        setBoard(newBoard)
      }

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
              <TouchableOpacity 
                key={col}
                style={[
                  styles.cell,
                  board[row * COLS + col].isRevealed && styles.cellRevealed
                ]}
                onPress={() => handlePress(row * COLS + col)}
              >
                <Text>
                  {board[row * COLS + col].isRevealed
                    ? board[row * COLS + col].hasMine
                      ? "💣"
                      : board[row * COLS + col].neighborCount || ""
                    : ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Game Logic */}
      OnPress = 

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
