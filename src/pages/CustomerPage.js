import React from 'react';
import './CustomerPage.css';
import ProductsList from '../components/ProductsList';
import Display from '../components/Display';
import CoinsList from '../components/CoinsList';
import { PRODUCTS } from '../constants';

export default class CustomerPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { insertedCoins: 0, selectedProduct: undefined, errorMessage: undefined, products: PRODUCTS };
	}

	insertCointChange = (coin) => {
		this.setState((state) => ({ insertedCoins: state.insertedCoins + coin.value }));
	};

	productSelected = (product) => {
		this.setState({ selectedProduct: product });
	};

	render() {
		return (
			<div className="Customer-page">
				<CoinsList onInsertCoinChange={this.insertCointChange} />
				<Display coinValue={this.state.insertedCoins} />
				<ProductsList
					products={this.state.products}
					selectedProduct={this.state.selectedProduct}
					onProductSelected={this.productSelected}
				/>
			</div>
		);
	}
}
