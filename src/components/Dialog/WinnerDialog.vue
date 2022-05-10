<template>
  <div class="winner-container">
    <div class="wrapper">
      <p class="font-large bold">
        Player {{ gameWinner.roundWinner }} WON!!!! 🥳🎉
      </p>
      <p class="bold">
        {{
          gameWinner.roundWinner === 1 ? gameWinner.player1 : gameWinner.player2
        }}
        out of 5
      </p>
      <button @click="nextRound" class="button">
        <span
          class="bold font-medium"
          v-if="gameWinner.player1 === 3 || gameWinner.player2 === 3"
          >Reset Game</span
        >
        <span class="bold font-medium" v-else>Next round</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["gameWinner"],
  methods: {
    nextRound() {
      this.$store.commit("nextRound", true);
      this.$emit("winnerDialog", false);
      if (this.gameWinner.games === 5) {
        this.$emit("resetGame");
      }
    },
  },
};
</script>
<style scoped>
.winner-container {
  background-color: rgb(255, 255, 255);
  position: fixed;
  left: 35vw;
  top: 35vh;
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(28, 158, 28);
  border-radius: 20px;
  border: 3px solid green;
}
.wrapper {
  text-align: center;
}
.button {
  background: rgba(21, 255, 0, 0.434);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 120px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
