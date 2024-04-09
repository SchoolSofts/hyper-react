import { useState } from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import { PageBreadcrumb } from '@/components';

const DefaultSlides = () => {
	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">Slides only</h4>
				<p className="text-muted font-14">
					Here’s a carousel with slides only. Note the presence of the
					<code>.d-block</code>
					and <code>.img-fluid</code> on carousel images to prevent browser default image
					alignment.
				</p>

				<Carousel indicators={false} controls={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const SlidesWithControls = () => {
	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">With controls</h4>
				<p className="text-muted font-14">Adding in the previous and next controls:</p>
				<Carousel indicators={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const SlidesWithIndicators = () => {
	const [index, setIndex] = useState<number>(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">With indicators</h4>
				<p className="text-muted font-14">
					You can also add the indicators to the carousel, alongside the controls, too.
				</p>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const SlidesWithCaptions = () => {
	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">With captions</h4>
				<p className="text-muted font-14">
					Add captions to your slides easily with the <code>.carousel-caption</code>
					element within any <code>.carousel-item</code>.
				</p>
				<Carousel indicators={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const CrossFade = () => {
	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">Crossfade</h4>
				<p className="text-muted font-14">
					Add <code>.carousel-fade</code> to your carousel to animate slides with a fade
					transition instead of a slide.
				</p>
				<Carousel fade indicators={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const IndividualInterval = () => {
	return (
		<Card>
			<Card.Body>
				<h4 className="header-title">Individual interval</h4>
				<p className="text-muted font-14">
					Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code> to change
					the amount of time to delay between automatically cycling to the next item.
				</p>
				<Carousel fade indicators={false}>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?sea"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={2000}>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?nature"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?island"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
};

const CarouselUI = () => {
	return (
		<>
			<PageBreadcrumb title="Carousel" subName="Base UI" />

			<Row>
				<Col lg={6}>
					<DefaultSlides />
				</Col>

				<Col lg={6}>
					<SlidesWithControls />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<SlidesWithIndicators />
				</Col>
				<Col lg={6}>
					<SlidesWithCaptions />
				</Col>
			</Row>

			<Row>
				<Col lg={6}>
					<CrossFade />
				</Col>
				<Col lg={6}>
					<IndividualInterval />
				</Col>
			</Row>
		</>
	);
};

export default CarouselUI;
