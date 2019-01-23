<template>
  <div class="container">
    <div class="background"></div>
    <landing-form />
    <customer-review />
  </div>
</template>

<script>
import LandingForm from "../../main-components/LandingForm";
import CustomerReview from "../../main-components/CustomerReview";
export default {
  name: "home",
  components: {
    LandingForm,
    CustomerReview
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.background {
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.cdn925.com/CampImg/1718/SuperDynamic/summer/summer2018.jpg");
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
/deep/ .form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 30vw;
  background-color: bisque;
  padding: 50px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &__email {
    font-size: 24px;
  }
  &__input {
    width: 100%;
    font-size: 24px;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
  }
  &__btn {
    margin-top: 20px;
    background-color: green;
    color: white;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
  }
}
/deep/ .reviews {
  align-self: flex-end;
  background-color: #3b5494;
  color: white;
  padding-left: 25vw;
  padding-right: 25vw;
  &__title {
    font-size: 25px;
    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 10px;
  }
  .review-list {
    display: flex;
    margin-bottom: 50px;
  }
  .review {
    flex: 1;
    padding: 10px;
    &__title {
      padding-bottom: 5px;
    }
    &__star {
      width: 150px;
      padding-bottom: 15px;
    }
    &__desc {
      font-size: 10px;
      line-height: 15px;
    }
  }
}
</style>
