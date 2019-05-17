import React, { Component } from "react";

class List extends Component {
  state = {
    brand: {}
  };
  componentDidMount() {
    if (this.props && this.props.brand) {
      const brand = this.props.brand;
      this.setState({ brand });
    }
  }

  callGetBrand() {
    this.props.getBrand(this.state.brand.id);
  }

  render() {
    return (
      <li>
        {this.state.brand.name}
        <button type="button" onClick={this.callGetBrand.bind(this)}>
          Get Data
        </button>
      </li>
    );
  }
}

export default List;
