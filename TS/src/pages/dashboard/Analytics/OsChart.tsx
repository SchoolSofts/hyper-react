import Chart from 'react-apexcharts';
import { Card, Row } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';
import { CardTitle } from '@/components';

const OsChart = () => {
	const apexOpts: ApexOptions = {
		grid: {
			padding: {
				left: 0,
				right: 0,
			},
		},
		chart: {
			height: 278,
			type: 'radialBar',
			parentHeightOffset: 0,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: '22px',
					},
					value: {
						fontSize: '16px',
					},
					total: {
						show: true,
						label: 'OS',
						formatter: function () {
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							return String(8541);
						},
					},
				},
			},
		},
		colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
		labels: ['Windows', 'Macintosh', 'Linux', 'Android'],
	};

	const apexData = [44, 55, 67, 83];

	return (
		<Card>
			<Card.Body>
				<CardTitle
					containerClass="d-flex align-items-center justify-content-between mb-3"
					title="Sessions by Operating System"
					menuItems={[{ label: 'Refresh Report' }, { label: 'Export Report' }]}
				/>

				<Chart
					options={apexOpts}
					series={apexData}
					type="radialBar"
					height={290}
					className="apex-charts mt-3"
				/>

				<Row className="text-center mt-2">
					<div className="col-6">
						<h4 className="font-weight-normal">
							<span>6,510</span>
						</h4>
						<p className="text-muted mb-0">Online System</p>
					</div>
					<div className="col-6">
						<h4 className="font-weight-normal">
							<span>2,031</span>
						</h4>
						<p className="text-muted mb-0">Offline System</p>
					</div>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default OsChart;
