import React from 'react';
import './ProductsList.css';

export default class ProductsList extends React.Component {
	productClick(product) {
		this.props.onProductSelected(product);
	}

	render() {
		return (
			<div className={'Products'}>
				{this.props.products.map((product) => {
					let productClassName = 'Products-list-product';
					let buttonAttributes = {};

					// For larger projects consider classnames or similar to handle dynamic classes
					if (this.props.selectedProduct && this.props.selectedProduct.name === product.name) {
						productClassName = productClassName.concat(' selected');
						buttonAttributes = { disabled: true };
					}

					return (
						<div key={product.name} className={productClassName}>
							<span>{product.name}</span>
							<button
								{...buttonAttributes}
								onClick={() => {
									this.productClick(product);
								}}
							>
								{product.cost}
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}
