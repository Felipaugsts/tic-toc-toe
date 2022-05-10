import { createStore } from "vuex";

export default createStore({
  state: {
    reset: false,
    gameStatus: {
      rounds: 0,
      player1: 0,
      player2: 0,
    },
    user: {
      auth: null,
      photoURL: null,
      displayName: null,
    },
  },
  getters: {
    resetState: (state) => state.reset,
    gameStatus: (state) => state.gameStatus,
    isUserAuthenticated: (state) => state.user,
  },
  mutations: {
    nextRound(state, status) {
      state.reset = status;
    },
    setGameStatus(state, status) {
      if (status) {
        state.gameStatus = status;
        localStorage.setItem("gameStatus", JSON.stringify(status));
      }
    },

    SET_USER(state, user) {
      console.log("user", user);
      state.user.displayName = user.displayName;
      state.user.photoURL = user.photoURL;
      state.user.auth = true;

      sessionStorage.setItem("user", JSON.stringify(state.user));
    },

    CLEAR_USER(state) {
      state.user = {
        auth: false,
        photoURL: null,
        nadisplayNameme: null,
      };
      localStorage.clear();
      sessionStorage.clear();
    },
  },
  actions: {
    retrieveGameStatus({ commit }) {
      var retrievedObject = localStorage.getItem("gameStatus");
      commit("setGameStatus", JSON.parse(retrievedObject));
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
    },

    isUserAuthenticated({ commit }) {
      var user = sessionStorage.getItem("user");

      if (user) {
        commit("SET_USER", JSON.parse(user));
      } else {
        commit("CLEAR_USER");
      }
    },
  },
});
