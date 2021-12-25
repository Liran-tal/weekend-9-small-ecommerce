import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Api from "./API/Api"
import NavBar from './components/navbar/navBar';
import Home from './components/home/home';
import ProductsList from './components/productList/productsList';
import Cart from './components/cart/cart';
import './App.css';


export default class App extends React.Component {
  state = {
    data: [],
    itemsIds: [],
    numItemsInBag: 0,
  }

  async componentDidMount () {
    const { data } = await Api.get('');
    this.setState({data: data});
  }

  onClick = ({target}) => {
    const tempArr = [... this.state.itemsIds];
    tempArr.push(target.id);
    this.setState((prevState) => ({
      ...prevState,
      itemsIds: tempArr,
      numItemsInBag: prevState.numItemsInBag + 1,
    }))
  }

  render () {
    return (
      <div className="App">
        Small Ecommerce
        <BrowserRouter>
          <NavBar numItemsInBag={this.state.numItemsInBag}/>
          <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route 
              path={'/products'} 
              element={<ProductsList 
                data={this.state.data}
                onClick={this.onClick}
              />} 
            />
            <Route 
              path={'/cart'} 
              element={<Cart 
                data={this.state.data}
                itemsIds={this.state.itemsIds}
              />} 
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

