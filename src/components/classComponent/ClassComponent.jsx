import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
      vol: 0,
    };
  }

  toggleLamp = () => {
    const currentState = this.state.isOn;
    this.setState({ isOn: !currentState });
  };

  render() {
    return (
      <>
        <p>Lampa je {this.state.isOn ? "on" : "off"}</p>
        <button onClick={this.toggleLamp}>Toggle</button>
        <p>Jacina je: {this.state.vol}</p>
        <input
          type="number"
          onChange={(e) => this.state({ vol: e.target.value })}
        ></input>
      </>
    );
  }
}

export default ClassComponent;
