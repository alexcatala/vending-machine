import React from 'react';
import { EURO_COINS } from '../constants';
import './CoinsList.css';

export default class CoinsList extends React.Component {
	coinClick(coin) {
		this.props.onInsertCoinChange(coin);
	}

	render() {
		return (
			<div className="Coins-list">
				{EURO_COINS.map((coin) => (
					<button
						key={coin.value.toString()}
						className="Coins-list-coin"
						onClick={() => {
							this.coinClick(coin);
						}}
					>
						{coin.label}
					</button>
				))}
			</div>
		);
	}
}
