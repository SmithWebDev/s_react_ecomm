import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx"
import SignInUpPage from './pages/auth/signinup.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

//import FormInput from './components/form-input/form-input.component.jsx';
//import CustomButton from './components/custom-button/custom-button.component.jsx';



import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user })
      //createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
          {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },
            () => {
              console.log(this.state);
            }
          );
          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});
      //console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    )};
}


export default App;
