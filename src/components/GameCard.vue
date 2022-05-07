<template>
  <div class="game-container">
    <div v-for="(option, x) in board" :key="x">
      <div
        class="game-item"
        v-for="(cell, y) in option"
        :key="y"
        @click="makeMove(x, y)"
      >
        <img
          v-if="cell === 1"
          class="img-player"
          src="@/assets/images/X_bright.svg"
        />
        <img
          v-else-if="cell === 2"
          class="img-player"
          src="@/assets/images/O_dark.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["turn"],
  data() {
    return {
      winner: null,
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      player: 1,
      options: [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
      ],
    };
  },
  methods: {
    makeMove(x, y) {
      if (this.winner != null) return;
      if (this.board[x][y]) return;
      this.$emit("handleClick", this.player === 1 ? 2 : 1);
      this.board[x][y] = this.player;
      this.CalculateWinner();
    },

    CalculateWinner() {
      var lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      var board = this.board.flat();

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          this.winner = board[a];
        }
      }
      return null;
    },
  },
  watch: {
    turn() {
      this.player = this.turn;
    },
  },
};
</script>

<style scoped>
.game-container {
  height: 500px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.game-item {
  width: 150px;
  height: 149px;
  margin-top: 8px;
  /* border: 2px solid rgb(158, 158, 158); */
  -webkit-box-shadow: 5px 6px 6px -4px #000000;
  box-shadow: 5px 6px 6px -4px #000000;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}
.game-item:hover {
  background: rgb(246, 248, 249);
}

.img-player {
  width: 90%;
  height: 90%;
  padding: 10px;
}
</style>
