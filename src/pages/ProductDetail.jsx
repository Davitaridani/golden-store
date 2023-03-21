import React, { useEffect } from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import Helmet from '../components/Helmet/Helmet'
import products from "../assets/data/dataProducts";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ListProduct from '../components/UI/ListProduct';

const ProductDetail = () => {



	const { id } = useParams();
	const product = products.find(item => item.id === id);
	const { imgUrl, productName, category, price, weight, description } =
		product;

	const productByCategory = products.filter(item => item.category === category)

	// scroll top ketika produk di pilih
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [product])

	const navLinks = [
		{ path: "/home", display: "Home" },
		{ path: "/product", display: "Product" },
		{ path: `/product/${id}`, display: `${productName}` },
	]

	return (
		<Helmet title={productName}>

			<div className="menu-links">
				<Container className='d-flex align-items-center border-bottom'>
					<ul className='d-flex align-items-center mb-0'>
						{
							navLinks.map((item, index) => (
								<li key={index} className="nav-item ">
									<a href={item.path} className="nav-link d-flex align-items-center">
										<span>
											<iconify-icon icon="mdi:slash-forward"></iconify-icon>
										</span>
										{item.display}</a>
								</li>
							))
						}
					</ul>

					<div className="prev-page ms-auto">
						<Link to="/product" className='link-prev nav-link ms-auto d-flex align-items-center'>
							<span className=''>
								<iconify-icon icon="ic:baseline-keyboard-arrow-left"></iconify-icon>
							</span>
							Previous Page</Link>
					</div>
				</Container>
			</div>

			<div className="sect-1-items-products">
				<Container>
					<Row className='justify-content-center'>
						<Col lg="8" className='mx-auto text-center'>
							<div className="product-name mb-4">
								<p className='mb-1'>Name Product</p>
								<h3>{productName}</h3>
							</div>
							<img src={imgUrl} alt="" className="img img-fluid w-75" />
							<div className="info-product">
								<div className="category">
									<p>Product Category</p>
									<h5 className='text-capitalize'>{category}</h5>
									<hr />
								</div>
								<div className="product-name">
									<p>Product Name</p>
									<h5 className='text-capitalize'>{productName}</h5>
									<hr />
								</div>

								<div className="desc ">
									<p>Product Description</p>
									<div className="w-75 mx-auto">
										<p className='desc-product'>{description}</p>
									</div>
									<hr />
								</div>

								<div className="detail">
									<p>Packing Detail</p>
									<h5 className='mb-0'>Price: Rp. {price}</h5>
									<h3 className='mb-0'>{weight}</h3>
									<hr />
								</div>
								<div className="icon-whatsapp d-inline-block">
									<Link className=" nav-link  d-flex align-items-center justify-content-center">
										<span>
											<iconify-icon icon="ic:baseline-whatsapp"></iconify-icon>
										</span>
										Hubunggi Kami
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="sect-2-detail-product">
				<Container>
					<Row className='justify-content-evenly'>
						<Col lg='12'>
							<div className="d-flex align-items-center border-top border-bottom py-3 mb-5 prev">
								<h3 className='mb-0'>Other Products</h3>
								<Link to="/product" className='link-prev nav-link ms-auto d-flex align-items-center'>
									<span>
										<iconify-icon icon="ic:baseline-keyboard-arrow-left"></iconify-icon>
									</span>
									Prev Page</Link>
							</div>
						</Col>
						<ListProduct data={productByCategory} />
					</Row>
				</Container>
			</div>


		</Helmet >
	)
}

export default ProductDetail
