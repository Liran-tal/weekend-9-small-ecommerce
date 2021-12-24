import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from "./API/Api"
import NavBar from './components/navbar/navBar';
import Home from './components/home/home';
import ProductsList from './components/productList/productsList';
import './App.css';


export default class App extends React.Component {
  state = {
    data: [],
    itemIds: [],
    numItemsInBag: 0,
  }

  async componentDidMount () {
    const { data } = await Api.get('');
    console.log(data);
    this.setState({data: data});
  }

  onClick = ({target}) => {

  }

  render () {
    return (
      <div className="App">
        Small Ecommerce
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route 
              path={'/products'} 
              element={<ProductsList 
                data={this.state.data}
                onClick={this.onClick}
              />} 
            />
            {/* <Route path={'/cart'} element={<Cart />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

