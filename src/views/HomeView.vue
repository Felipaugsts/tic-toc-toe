<template>
  <div class="homeview">
    <!-- USER INFORMATION -->
    <div class="container-wrapper-user">
      <div class="user-container">
        <div class="profile-container">
          <div class="image-profile-wrapper">
            <!-- <img src="" /> -->
            <p class="font-medium">(Photo Area)</p>
          </div>
          <div class="profile-info">
            <p class="font-large">John smith</p>
            <p class="font-medium normal">Age: 30</p>
            <p class="font-medium normal">Location: Porto</p>
            <p class="font-medium normal">Ocupation: Software engineer</p>
          </div>
        </div>

        <div class="about-container">
          <p class="font-medium normal">
            about me: <br />
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
            ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </div>
    <!-- GAME CONTAINER -->
    <div class="game-container">
      <p class="font-large bold">Tic toc toe Games</p>
      <p class="font-medium normal">Welcome to the best game in the world</p>
      <div class="game-container-table">
        <p
          :class="
            turn !== 1
              ? 'font-large bold player'
              : 'player-active font-large bold'
          "
        >
          Player 1
        </p>
        <gameCard
          @handleClick="changeToNextPlayer"
          :reset="reset"
          :turn="turn"
          @winner="setWinner"
        />
        <p
          :class="
            turn !== 2
              ? 'font-large bold player'
              : 'player-active font-large bold'
          "
        >
          Player 2
        </p>
      </div>
    </div>
    <WinnerCardVue
      v-if="winnerStatus"
      @winnerDialog="winnerStatus = false"
      @resetGame="resetGame"
      :gameWinner="gameWinner"
    />
  </div>
</template>

<script>
import gameCard from "@/components/GameCard.vue";
import WinnerCardVue from "@/components/WinnerCard.vue";
export default {
  components: {
    gameCard,
    WinnerCardVue,
  },
  data() {
    return {
      turn: 1, //who will play next round
      winnerStatus: false, // modal displayed when we have a winner
      gameStatus: {
        rounds: 0,
        player1: 0,
        player2: 0,
      }, // game status
    };
  },
  methods: {
    changeToNextPlayer(e) {
      this.turn = e;
    },
    setWinner(e) {
      this.gameStatus.rounds = this.gameStatus.rounds + 1;
      if (e === 1) {
        this.gameStatus.player1++;
        this.gameWinner = {
          winner: 1,
          games: this.gameStatus.player1,
        };
      } else if (e === 2) {
        this.gameStatus.player2++;
        this.gameWinner = {
          winner: 2,
          games: this.gameStatus.player2,
        };
      }
      this.winnerStatus = true;
    },

    resetGame() {
      (this.gameStatus.rounds = 0),
        (this.gameStatus.player1 = 0),
        (this.gameStatus.player2 = 0);
    },
  },
};
</script>

<style scoped>
/* MAIN CSS */
.homeview {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background: rgb(245, 243, 243);
  height: auto;
}

/*  USER PROFILE CSS */
.image-profile-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 150px;
  border: none;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-container {
  width: 50%;
  display: flex;
  align-items: center;
}
.profile-info {
  padding-left: 25px;
}
.about-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-container {
  display: flex;
  width: 1150px;
  padding: 15px;
}
.container-wrapper-user {
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
  height: 300px;
}

/* GAME CSS  */

.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.game-container-table {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.player {
  padding: 20px;
  font-size: 24px;
  color: rgb(205, 205, 205);
}
.player-active {
  background: white;
  border-radius: 15px;
  border: 0.2px solid rgb(10, 197, 85);
  color: rgb(10, 197, 85);
  padding: 20px;
}
</style>
