import React from "react";
import "./App.css";
import image1 from "./images/ImagePr.jpg";
import "./Css/style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        FullName: "oussama ",
        bio: "",
        profession: "",
        imgsrc: { image1 },
        isActive: false,
      },
    };
  }
  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };
  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };
  render() {
    const styleObject = { color: "grey", textAlign: "center" };
    if (this.state.isActive) {
      return (
        <div style={styleObject}>
          <div className="btn">
            <button onClick={this.handleHide}>Hide</button>
          </div>
          <div className="avatar">
            <img src={image1} alt="me" />
          </div>
          <h1>{this.state.Person.FullName}</h1>
          <h2>{this.state.Person.profession}</h2>
          <p>{this.state.Person.bio}</p>
        </div>
      );
    } else {
      return (
        <div className="btn">
          <button onClick={this.handleShow}>Show</button>
        </div>
      );
    }
  }
}
export default App;
