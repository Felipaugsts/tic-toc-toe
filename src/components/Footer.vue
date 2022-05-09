<template>
  <div class="footer-container">
    <div class="font-medium contact">
      <span>About page</span><br />
      <p>Play Tic toc toe any time</p>
      <br />
      created by Felipe Augusto
    </div>
    <div class="font-medium">
      Contacts: <br />
      <p>(+111)1233-32333</p>
    </div>
    <div>
      Stay in touch <br />

      <div>
        <img class="icon" src="../assets/images/facebook.svg" />
        <img class="icon" src="../assets/images/instagram.svg" />
        <img class="icon" src="../assets/images/twitter.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background: white;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.icon {
  height: 35px;
  margin-right: 5px;
  border-radius: 10px;
  margin-top: 5px;
}
</style>
