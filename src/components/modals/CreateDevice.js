import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <div>
            <Modal
                size="lg"
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Device
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown>
                            <Dropdown.Toggle>Choose Device </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.device.map(device =>
                                    <Dropdown.Item key={device.id}>{device.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={'mt-2 mb-2'}>
                            <Dropdown.Toggle>Choose Brand </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className={'mt-3'}
                            placeholder={'Enter device'}
                        />
                        <Form.Control
                            className={'mt-3'}
                            placeholder={'Enter price'}
                            type={'number'}
                        />
                        <Form.Control
                            className={'mt-3'}
                            type={'file'}
                        />
                        <hr/>
                        <Button
                            variant={'outline-dark'}
                            onClick={addInfo}
                        >
                            Add new property
                        </Button>
                        {info.map(item =>
                            <Row className={'mt-2'} key={item.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={'Enter name'}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={'Enter description'}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={()=> removeInfo(item.number)}
                                        variant={'outline-danger'}
                                    > Delete</Button>
                                </Col>
                            </Row>
                        )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'outline-dark'} onClick={onHide}>Close</Button>
                    <Button variant={'outline-success'} onClick={onHide}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;
