<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <!--    Logo-->
      <router-link class="navbar-brand" to="/">
        <img id="logo" src="../../../src/assets/icons/icon.png" />
      </router-link>
  
      <!--    Burger Button-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!--      Search Bar-->
        <form class="form-inline ml-auto mr-auto">
          <div class="input-group">
            <input
              size="100"
              type="text"
              class="form-control"
              placeholder="Search Items"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="search-button-navbar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </form>
  
        <!--      DropDowns-->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link text-light dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Browse
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name:'home' }"
                >Home</router-link
              >
              <router-link class="dropdown-item" :to="{ name:'adminproduct' }"
                >Product</router-link
              >
              <router-link class="dropdown-item" :to="{ name:'Category' }"
                >Category</router-link
              >
            </div>
          </li>
  
          <li class="nav-item dropdown">
            <a
              class="nav-link text-light dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Accounts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item" to="/"
                
                >Wishlist</router-link>
              <router-link class="dropdown-item" to="/"
                >Wishlist</router-link
              >
              <router-link class="dropdown-item" :to="{ name:'Admin'}"
                >Admin</router-link
              >
              <router-link
                class="dropdown-item" to="/"
                
                >Log In</router-link 
              >
              <router-link
                class="dropdown-item" to="/"
              
               
                >Sign Up</router-link
              >
              <a class="dropdown-item"  to="/"
                >Sign Out</a
              >
            </div>
          </li>
  
          <li class="nav-item">
            <router-link class="nav-link text-light" 
             to="/" >Orders</router-link
            >
          </li>
          <li class="nav-item">
            <div id="cart">
              <span id="nav-cart-count"></span>
              <router-link class="text-light" 
               to="/" ><i class="fa fa-shopping-cart" style="font-size:36px"></i
              ></router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  

<script>
export default {
    name:'Navbar',
    components:{
        
    }
}
</script>
<style>
.for{
height: 80px;
}
.formi{
height: 10px;
}
</style>