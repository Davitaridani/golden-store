import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import products from "../assets/data/dataProducts";
import Helmet from "../components/Helmet/Helmet";
import ListProduct from '../components/UI/ListProduct';
import SectionBanner from "../components/UI/SectionBanner";
import imgProduct from "../assets/img/banner-product.jpg";

const Product = () => {

	const [dataProduct, setDataProduct] = useState(products)

	// Filter Product By Category
	const handleFilter = (e) => {
		const resultFilter = e.target.value
		if (resultFilter === "fruit") {
			const filteredProduct = products.filter(item => item.category === "fruit")
			setDataProduct(filteredProduct)
		} else if (resultFilter === "salad") {
			const filteredProduct = products.filter(item => item.category === "salad")
			setDataProduct(filteredProduct)
		} else if (resultFilter === "juice") {
			const filteredProduct = products.filter(item => item.category === "juice")
			setDataProduct(filteredProduct)
		} else {
			setDataProduct(products)
		}
	}

	// button search Products
	const handleSearch = (e) => {
		const searchValue = e.target.value
		const resultProduct =
			products.filter(item => item.productName.toLowerCase().includes(searchValue.toLowerCase()));

		setDataProduct(resultProduct)
	}

	return (
		<Helmet title="Product">

			<div className="banner-contact">
				<Container>
					<div className="img-banner">
						<img
							src={imgProduct}
							alt="Image Banner"
							className="img img-fluid w-100"
						/>
					</div>
				</Container>
				<SectionBanner titleBanner="Our Products" />
			</div>

			<div className="filter-product ">
				<Container>
					<Row>
						<Col md="6" lg="8" className='ps-0'>
							<div className="d-flex align-items-center filter-by">
								<h3>Filter By:</h3>
								<select onChange={handleFilter}>
									<option >All Product</option>
									<option value="fruit">Fruit</option>
									<option value="salad">Salad</option>
									<option value="juice">Juice</option>
								</select>
							</div>
						</Col>

						<Col md="2" lg="4" className='pe-0'	>
							<div className="btn-search">
								<input type="text" placeholder="Search....." onChange={handleSearch} />
								<span>
									<iconify-icon icon="ic:baseline-search"></iconify-icon>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="data-product">
				<Container>
					<Row className='justify-content-evenly'>
						{
							products.length === 0 ? <h1 className='text-center fs-4 text-danger'>Product yang anda cari tidak ada!!</h1> : <ListProduct data={dataProduct} />
						}
					</Row>
				</Container>
			</div>
		</Helmet>
	)
}

export default Product
