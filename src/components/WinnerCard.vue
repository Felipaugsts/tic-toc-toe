<template>
  <div class="winner-container">
    <div class="wrapper">
      <p class="font-large bold">Player {{ gameWinner.winner }} WON!!!!</p>
      <p class="bold">{{ gameWinner.games }} out of 5</p>
      <button @click="nextRound" class="button">
        <span class="bold font-medium" v-if="gameWinner.games === 3"
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
      if (this.gameWinner.games === 3) {
        this.$emit("resetGame");
      }
    },
  },
};
</script>
<style scoped>
.winner-container {
  background-color: rgb(228, 228, 236);
  position: fixed;
  left: 35vw;
  top: 35vh;
  height: 200px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  border-radius: 20px;
}
.wrapper {
  text-align: center;
}
.button {
  background: rgba(133, 149, 212, 0.434);
  color: black;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
