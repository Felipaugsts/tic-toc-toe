<template>
  <div class="homeview">
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
  </div>
</template>

<style scoped>
.homeview {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  background: rgb(245, 243, 243);
  height: 100vh;
}
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
</style>
