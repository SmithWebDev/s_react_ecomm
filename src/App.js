import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}










//const HomePage = props => {
//  console.log(props);
//  return (
//    <div>
//      <Link to='/topics'>Topics</Link>
//      <button onClick={() => props.history.push('/topics')}>Topics </button>
//      <h1>HOME PAGE</h1>
//    </div>
//  );
//};
//
//const TopicsList = () => {
//  return (
//    <div>
//      <h1>TOPIC LIST PAGE</h1>
//    </div>
//  );
//};
//
//const TopicDetail = () => {
//  return(
//    <div>
//      <h1>TOPIC DETAIL PAGE</h1>
//    </div>
//  );
//};
//
//function App() {
//  return(
//    <div>
//      <Route exact path='/' component={HomePage} />
//      <Route exact path='/topics' component={TopicsList} />
//      <Route exact path='/topics/:topicId' component={TopicDetail} />
//    </div>
//  );
//}
export default App;
