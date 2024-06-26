import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactSelect from 'react-select';
import { useToggle } from '@/hooks';
import { Form, SelectInput, TextAreaInput, TextInput } from '@/components/Form';
import { Project } from './types';
import { CardTitle } from '@/components';
import * as yup from 'yup';

type ProjectListProps = {
	projectList: Project[];
};

type AddNewProjectProps = {
	show: boolean;
	handleClose: () => void;
};

const AddNewProject = ({ show, handleClose }: AddNewProjectProps) => {
	const projectSchema = yup.object({
		email: yup.string().email('Please enter valid email').required('Please enter email'),
		password: yup.string().required('Please enter password'),
	});

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title as="h5">Add New Project</Modal.Title>
			</Modal.Header>
			<Form onSubmit={() => {}} schema={projectSchema}>
				<Modal.Body>
					<TextInput
						type="text"
						label="Project Name"
						name="projectName"
						placeholder="Add project name..."
						containerClass="mb-3"
					/>

					<SelectInput name="select" label="Add Task" containerClass="mb-3">
						<option>Add a task...</option>
						<option value="1">Landing Page</option>
						<option value="2">Admin Dashboards</option>
						<option value="3">Admin Pages</option>
						<option value="4">UX/UI Design</option>
						<option value="5">Client Work</option>
						<option value="6">Other Work</option>
					</SelectInput>

					<div className="mb-3">
						<label htmlFor="AssignTask" className="form-label">
							Assign Task
						</label>
						<ReactSelect
							placeholder="Choose..."
							isMulti={true}
							options={[
								{
									label: 'UX Designer',
									options: [
										{ value: 'AD', label: 'Andrea' },
										{ value: 'DL', label: 'Danielle' },
										{ value: 'JH', label: 'John' },
									],
								},
								{
									label: 'Developer',
									options: [
										{ value: 'ST', label: 'Steven' },
										{ value: 'MC', label: 'Michael' },
									],
								},
								{
									label: 'UX Designer',
									options: [
										{ value: 'SR', label: 'Sharon' },
										{ value: 'TM', label: 'Timothy' },
										{ value: 'FD', label: 'Frederick' },
										{ value: 'HN', label: 'Henry' },
									],
								},
							]}
							className="react-select"
						/>
					</div>

					<TextAreaInput label="Description" name="description" rows={4} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Task
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

const ProjectList = ({ projectList }: ProjectListProps) => {
	const [isopen, , show, hide] = useToggle();

	return (
		<>
			<Row>
				{(projectList || []).map((project, index) => {
					return (
						<Col key={index.toString()} sm={6} xl={3} className="mb-3">
							<Card className="mb-0 h-100">
								<Card.Body>
									<CardTitle
										containerClass="d-flex align-items-start justify-content-between"
										title={
											<div>
												<h4 className="header-title">{project.title}</h4>
												<h5
													className="text-muted fw-normal mt-0 text-truncate"
													title="Campaign Sent"
												>
													{project.task}
												</h5>
											</div>
										}
										icon="mdi mdi-dots-horizontal"
										menuItems={[
											{ label: 'Add Card', icon: 'mdi mdi-plus-circle' },
											{ label: 'Copy List', icon: 'mdi mdi-content-copy' },
											{ label: 'Edit', icon: 'mdi mdi-square-edit-outline' },
											{
												label: 'Delete',
												icon: 'mdi mdi-trash-can-outline',
												variant: 'text-danger',
												hasDivider: true,
											},
										]}
									/>

									<div className="d-flex align-items-center mt-3">
										<div className="flex-shrink-0">
											<h5 className="font-13 text-muted my-0">
												<i className="mdi mdi-clock-outline"></i>
												{project.created_on}
											</h5>
										</div>
										<div className="flex-grow-1 ms-2"></div>
										<div className="text-end multi-user">
											{(project.members || []).map((member, index) => {
												return (
													<Link
														key={index.toString()}
														to=""
														className="d-inline-block"
													>
														<img
															src={member}
															className="rounded-circle avatar-xs"
															alt="friend"
														/>
													</Link>
												);
											})}
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
				<Col sm={6} xl={3} className="mb-3">
					<Card className="mb-0 h-100">
						<Card.Body>
							<div className="border-dashed border-2 border h-100 w-100 rounded d-flex align-items-center justify-content-center">
								<Link
									to=""
									onClick={show}
									className="text-center text-muted p-2"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									<i className="mdi mdi-plus h3 my-0"></i>
									<h4 className="font-16 mt-1 mb-0 d-block">Add New Project</h4>
								</Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<AddNewProject show={isopen} handleClose={hide} />
		</>
	);
};

export default ProjectList;
