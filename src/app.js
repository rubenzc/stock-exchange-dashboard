import React from "react";
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import "./app.scss";

class App extends React.Component {
  render() {
  return (
		<div className="mainWrapper">
			<NavBar />

			<SideBar />
		</div>

  );}}
  export default App;