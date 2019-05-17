import React, { Component } from "react";
import api from "../config/Axios";
import List from "../components/List";

class Brand extends Component {
  state = {
    brands: [],
    unauthorised: false
  };
  componentDidMount() {
    api
      .get(`brands`)
      .then(res => {
        // console.log(res);
        const brands = res.data.data.items;
        this.setState({ brands });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          unauthorised: true
        });
      });

    this.getBrand.bind(this);
  }

  getBrand(id) {
    api
      .get(`brand/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        this.setState({
          unauthorised: true
        });
      });
  }

  render() {
    const listItems = this.state.brands.map(brand => (
      <List brand={brand} key={brand.id} getBrand={this.getBrand} />
    ));

    if (this.state.unauthorised) {
      return <h1>You do not have access to this content</h1>;
    } else {
      return (
        <div>
          <h2 className="green">Brand Page</h2>
          <hr />
          <p>Brands List: </p>
          <ul>{listItems}</ul>
        </div>
      );
    }
  }
}

export default Brand;
