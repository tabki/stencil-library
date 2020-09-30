import React from "react";

export default class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true
    };
  }

  hide = () => {
    this.setState({
      showing: !this.state.showing
    });
  };
  render() {
    return (
      <div onClick={this.hide} style={{ background: "red", height: "40px" }}>
        {this.state.showing && <code>Showing</code>}
      </div>
    );
  }
}
