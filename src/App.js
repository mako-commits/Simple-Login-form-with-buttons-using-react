import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  BufferLoginButton
} from "react-social-login-buttons";

import './App.css';

function App() {




  function handleClick() {
    alert("Hello!");
  }

  return (
    <div>
      <Form className="form">
        <h1><span className="font-weight-bold">pythagoras</span>.online</h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>
            Email
        </Label>
          <Input type="email" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <Label>
            Password
        </Label>
          <Input type="password" placeholder="Enter Password" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center pt-3">Or continue with your social acount</div>


        <div className="text-center">
          <a href="/sign-up">Sign up</a><span className="p-2">|</span>
          <a href="/forgot password">Forgot Password</a>
        </div>
      </Form>
      <div className="buttons container">
        <div className="social-login-buttons row col-10 text-center">
          <FacebookLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <GoogleLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <GithubLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
        </div>
        <div className="social-login-buttons row col-10">
          <TwitterLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <AmazonLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <InstagramLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
        </div>
        <div className="social-login-buttons row col-10">
          <LinkedInLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <MicrosoftLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
          <BufferLoginButton className="mt-3 mb-3 col-md-3" onClick={handleClick} />
        </div>
      </div>

    </div>

  );
}

export default App;
