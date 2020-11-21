import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx"
import SignInUpPage from './pages/auth/signinup.component.jsx';
import Header from './components/header/header.component.jsx';
//import FormInput from './components/form-input/form-input.component.jsx';
//import CustomButton from './components/custom-button/custom-button.component.jsx';



import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUpPage} />
      </Switch>
    </div>
  );
}


export default App;
