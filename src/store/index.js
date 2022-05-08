import { createStore } from "vuex";

export default createStore({
  state: {
    reset: false,
  },
  getters: {
    resetState: (state) => state.reset,
  },
  mutations: {
    nextRound(state, status) {
      state.reset = status;
      console.log("state reset", state.reset);
    },
  },
  actions: {},
  modules: {},
});
