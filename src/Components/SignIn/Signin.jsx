import React from 'react';
import './Signin.css'
import logo from '../Image/full-stack-developer-badge.png';

const Signin = () => {
  return <div class="text-center newbody">
  <main class="form-signin">
  <form>
    <img class="mb-4" src={logo} alt="Logo" width="120" height="120"/>
    <h1 class="h3 mb-3 fw-normal">Admin Panel For<br></br> Nazif Malhi</h1>

    <div class="form-floating">
      <input type="name" class="form-control" id="floatingInput" placeholder="username"/>
      <label for="floatingInput">User Name</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
  </form>
</main>
  </div>;
};

export default Signin;
