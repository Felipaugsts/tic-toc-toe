import { createStore } from "vuex";

export default createStore({
  state: {
    reset: false,
    gameStatus: {
      rounds: 0,
      player1: 0,
      player2: 0,
    },
  },
  getters: {
    resetState: (state) => state.reset,
    gameStatus: (state) => state.gameStatus,
  },
  mutations: {
    nextRound(state, status) {
      state.reset = status;
    },
    setGameStatus(state, status) {
      console.log("status", status);
      localStorage.setItem("gameStatus", JSON.stringify(status));
    },
    setStatus(state, status) {
      console.log("new status", status);
      if (status) {
        state.gameStatus = status;
      }
    },
  },
  actions: {
    retrieveGameStatus({ commit }) {
      var retrievedObject = localStorage.getItem("gameStatus");
      commit("setStatus", JSON.parse(retrievedObject));
    },

    resetGame({ commit }) {
      console.log("reseting");
      localStorage.removeItem("gameStatus");
      const gameStatus = {
        rounds: 0,
        player1: 0,
        player2: 0,
      };
      commit("setGameStatus", gameStatus);
      commit("setStatus", gameStatus);
    },
  },
  modules: {},
});
