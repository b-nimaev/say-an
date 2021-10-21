<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">adfdsa</div>
        <div class="col-md-6">adfdsa</div>
      </div>
      <a class="navbar-brand" href="#">FrontendDev</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project/1">Projects</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="submit">Login</button>
        </form>
  </div>
    </div>

      <!-- <a class="navbar-brand" href="#">FrontendDev</a> -->
      <!--
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      -->

    </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-6">dasd</div>
      <div class="col-md-6">dasd</div>
    </div>
  </div>
</template>


<style lang="scss">
  nav {
    background-color: #252940;
    border-radius: 5px;
    margin-bottom: 1rem;

    button.btn.btn-outline-success {
      border-radius: 5px;
    }
  }
</style>
