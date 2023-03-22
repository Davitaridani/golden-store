import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import dataProducts from "../assets/data/dataProducts";
import Helmet from '../components/Helmet/Helmet';
import ListProduct from "../components/UI/ListProduct";
import ListKategoryCompt from '../components/UI/ListKategoryCompt';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Home = () => {

	const [bestSellers, setBestSellers] = useState([])
	const [newProduct, setNewProduct] = useState([])
	const [productLainnya, setProductLainnya] = useState([])

	// Component Did Update
	useEffect(() => {
		const filterBestSellers = dataProducts.filter(item => item.group === "bestSeller")
		const filterNewProduct = dataProducts.filter(item => item.group === "newProduct")
		const filterProductLainnya = dataProducts.filter(item => item.group === "seeMorePorduct")

		setBestSellers(filterBestSellers)
		setNewProduct(filterNewProduct)
		setProductLainnya(filterProductLainnya)
	}, [])

	// AOS
	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<Helmet title="Home">

			<section className="sect-banner">
				<Container className="p-0">
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						speed={2000}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						parallax={true}
						pagination={{
							clickable: true,
						}}

						navigation={true}
						modules={[Parallax, Pagination, Navigation, Autoplay]}
						className="mySwiper"
					>
						<div
							slot="container-start"
							className="parallax-bg"
							data-swiper-parallax="-23%"
						></div>
						<SwiperSlide>
							<div className="text-banner">
								<h3 className="title text-capitalize" data-swiper-parallax="-800">
									Ingin cari produk dijamin  <br /> kualitasnya? Kunjungi toko kami!
								</h3>
								<div className="text" data-swiper-parallax="-200">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
										dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
										laoreet justo vitae porttitor porttitor. Suspendisse in sem
									</p>
								</div>
								<div className="link d-flex align-items-center">
									<Link to="/product">View Product
										<span>
											<iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon></span>
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-banner">
								<h3 className="title text-capitalize" data-swiper-parallax="-800">
									Beli produk kami dan <br /> dapatkan penawaran spesial.
								</h3>
								<div className="text" data-swiper-parallax="-200">
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nesciunt quas officiis omnis doloribus harum cumque! Sint assumenda voluptatibus dicta architecto minus fugit.
									</p>
								</div>
								<div className="link d-flex align-items-center">
									<Link to="/product">Lihat Product
										<span>
											<iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon></span>
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="text-banner">
								<h3 className="title text-capitalize" data-swiper-parallax="-800">
									Follow akun sosmed kami! <br /> Dapatkan penawaran menarik.
								</h3>
								<div className="text" data-swiper-parallax="-200">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ab officiis neque quos. Consequatur voluptatum qui minima vel quae, recusandae, modi maxime excepturi ipsam delectus tenetur, amet deleniti culpa possimus!
									</p>
								</div>
								<div className="link d-flex align-items-center">
									<Link to="/product">Lihat Product
										<span>
											<iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon></span>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</Container>
			</section>

			<section className="sect-2">
				<Container>
					<Row>
						<Col className="mx-auto text-center" lg="9">
							<div className="items-text ">
								<div className="title">
									<h5>Tentang Golden</h5>
									<h1>Unggul Dari Segi Harga dan Kualitas</h1>
								</div>
								<div className="desc">
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus et ullam quas facere ea omnis quibusdam quasi quisquam, in illum harum vitae reprehenderit saepe perspiciatis neque debitis veritatis, beatae quia, consequuntur labore. Necessitatibus eaque facilis officiis in doloremque. Quo ea totam consequuntur quam aliquam tenetur magnam recusandae optio ipsa laboriosam labore obcaecati inventore repudiandae soluta, nemo explicabo ad animi expedita, iste id doloribus. Libero accusantium delectus quae facilis officiis aperiam vitae perferendis mollitia non, qui est, nesciunt repellendus? Animi?</p>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam illo culpa error, quas unde explicabo. Ratione dolore accusantium pariatur repellendus, aliquid aspernatur enim mollitia architecto animi dignissimos saepe quo.</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="sect-3">
				<div className="title text-center">
					<h3>Lihat Produk Sesuai Kategori : </h3>
				</div>
				<ListKategoryCompt />
			</section>

			<section className="sect-4">
				<Container>
					<Row>
						<div className="title text-center">
							<h3>Best Sellers</h3>
							<hr />
						</div>
						<ListProduct data={bestSellers} />
					</Row>
				</Container>
			</section>

			{/* New Product */}
			<section className="sect-5">
				<Container>
					<Row>
						<div className="title text-center">
							<h3>New Products</h3>
							<hr />
						</div>
						<ListProduct data={newProduct} />
					</Row>
				</Container>
			</section>

			{/* Product Lainnya */}
			<section className="sect-6">
				<Container>
					<Row>
						<div className="title text-center">
							<h3>See More</h3>
							<hr />
						</div>
						<ListProduct data={productLainnya} />
					</Row>
				</Container>
			</section>

		</Helmet >

	)
}

export default Home

