// app/index.js
// Screen 1 — Home Screen
// Shows four colourful cards, each linking to a game screen.
// Uses inline styles so the app works even before NativeWind is fully wired up.

import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Game card data — add or remove entries here to change what appears on the home screen
const GAMES = [
  { route: "/game/tictactoe", emoji: "⭕", title: "Tic-Tac-Toe",   desc: "Classic X's and O's",    color: "#FF6B6B" },
  { route: "/game/minesweeper", emoji: "💣", title: "Minesweeper", desc: "Find the hidden mines",  color: "#6BCB77" },
  { route: "/game/wordguess",  emoji: "🔤", title: "Word Guess",   desc: "Guess the mystery word", color: "#4D96FF" },
  { route: "/game/memory",     emoji: "🃏", title: "Memory Match", desc: "Match the pairs",        color: "#C77DFF" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>🎉</Text>
        <Text style={styles.headerTitle}>Game Hub</Text>
        <Text style={styles.headerSub}>Pick a game and start playing!</Text>
      </View>

      {/* ── Game Cards ── */}
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {GAMES.map((game) => (
          <TouchableOpacity
            key={game.route}
            onPress={() => router.push(game.route)}
            activeOpacity={0.85}
            style={styles.cardWrap}
          >
            <View style={[styles.card, { backgroundColor: game.color }]}>
              <Text style={styles.cardEmoji}>{game.emoji}</Text>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{game.title}</Text>
                <Text style={styles.cardDesc}>{game.desc}</Text>
              </View>
              <Text style={styles.cardArrow}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:   { flex: 1, backgroundColor: "#FFF8E7" },
  header:      { paddingTop: 24, paddingBottom: 16, alignItems: "center" },
  headerEmoji: { fontSize: 48, marginBottom: 4 },
  headerTitle: { fontSize: 36, fontWeight: "800", color: "#333" },
  headerSub:   { fontSize: 15, color: "#888", marginTop: 4 },
  scroll:      { paddingHorizontal: 20, paddingBottom: 40 },
  cardWrap:    { marginBottom: 16 },
  card:        { borderRadius: 24, padding: 20, flexDirection: "row", alignItems: "center",
                 shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: 8, shadowOffset: { width: 0, height: 4 },
                 elevation: 4 },
  cardEmoji:   { fontSize: 44, marginRight: 16 },
  cardText:    { flex: 1 },
  cardTitle:   { fontSize: 22, fontWeight: "700", color: "#fff" },
  cardDesc:    { fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 2 },
  cardArrow:   { fontSize: 28, color: "rgba(255,255,255,0.7)" },
});
