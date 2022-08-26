import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ReatModal = (props) => {
	console.log(props.product)
	const {title, image, price, description}= props.product
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Details
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<img className="w-50" src={image} alt="" />
					<Modal.Title>{title.slice(0, 20)}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{description}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ReatModal;
