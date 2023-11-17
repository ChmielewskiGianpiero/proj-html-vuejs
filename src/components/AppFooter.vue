<script>


export default  {
  data (){
      return {
        
    }
  },
  methods:{

  },
  created (){
      
  }
}
</script>

<template>
  <div class="footer-page">
    <div class="container-md">
      <div class="row">
        <div class="col-4">
          <img src="/public/mt-2236-home-logo.png" alt="page logo">
          <div class="copyright">Copyright © 2021. All Rights Reserved </div>
        </div>
        <div class="col-4 social">
          <div>Follow Us</div>
          <ul class="brand-list">
            <li>
              <img src="/public/facebook-logo.png" alt="">
            </li>
            <li>
              <img src="/public/telegram.png" alt="">
            </li>
            <li>
              <img src="/public/instagram.png" alt="">
            </li>
          </ul>
        </div>
        <div class="col-4 email-section">
          <p>Subscribe to get the latest news, course updates, discounts, events</p>
          <input class="email-bar" type="email" name="" id="" placeholder="Enter your e-mail here *">
          <div>
            <a class="btn" href="#">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.email-bar{
  height: 35px;
  padding: 15px;
}

.email-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: $primary_color;
  font-size: 15px;
}

.btn {
    background-color: $secondary_color ;
    color: $dark;
    font-weight: bold;
    margin-right: 90px;
    font-size: 15px;
    display: inline-block;
    padding: 10px 20px;
}

.copyright{
  flex-grow: 1;
  color: $primary_color;
  margin-top: 100px;
  font-size: 11px;
}

.social{
  margin-left: 130px;

  div {
    margin-bottom: 20px;
    color: $primary_color;
  }

}

.brand-list {
  display: flex;
  gap: 3px;

  li{
    border: 1px solid $light_grey;
    border-radius: 5px;
    padding: 2px;
    gap: 10px;
  }

  img{
    max-width: 20px;
    padding: 3px;
  }
}

.footer-page {
  background-color: #262626;
  padding: 40px 0px 25px 0px;
}
</style>