import React from "react";

import Footer from  "./Footer";
import Header from  "./Header";


export default class Layout extends React.Component {
  render() {
    var list = [
      <Header/>,
      <Header/>,
      <Header/>,
    ];
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
};
