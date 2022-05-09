<template>
  <div class="footer-container">
    <div class="footer">
      <div class="font-medium contact">
        <span class="font-medium">About page</span><br />
        <span class="font-medium">Play Tic toc toe any time</span>
        <br />
        <span class="bold">created by Felipe Augusto</span>
      </div>
      <div class="font-medium">
        <span class="bold">Contacts:</span> <br />
        <span class="font-medium">(+111)1233-32333</span>
      </div>
      <div class="font-medium">
        Stay in touch <br />

        <div>
          <img class="icon" src="../assets/images/facebook.svg" />
          <img class="icon" src="../assets/images/instagram.svg" />
          <img class="icon" src="../assets/images/twitter.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background: white;
  height: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.footer {
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon {
  height: 35px;
  margin-right: 5px;
  border-radius: 10px;
  margin-top: 5px;
}
</style>
