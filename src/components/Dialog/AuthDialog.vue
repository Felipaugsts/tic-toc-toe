<template>
  <div class="container">
    <div class="container-auth">
      <img
        class="image-auth"
        src="@/assets/images/security.gif"
        alt="Security"
      />

      <p class="font-large auth-font">
        Login with
        <span @click="handleAuthentication" class="link">google</span> to start
        playing
      </p>
    </div>
  </div>
</template>
<script>
import { Auth, Provider } from "../../firebaseConfig/FirebaseConfig.js";
export default {
  methods: {
    handleAuthentication() {
      console.log("handleAuthentication");
      Auth.signInWithPopup(Provider).then((result) => {
        console.log("result", result);
        this.$store.commit("SET_USER", result.user);
      });
    },
  },
};
</script>

<style scoped>
.image-auth {
  height: 350px;
  width: 350px;
}
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 235, 219);
  position: fixed;
  top: 0;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container-auth {
  height: 500px;
  width: 900px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.link {
  color: rgb(44, 133, 241) !important;
  cursor: pointer;
  font-weight: bold;
}
</style>
