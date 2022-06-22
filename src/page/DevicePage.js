import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Samsung',
        price: 124,
        img: 'https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg'
    }

    return (
        <Container>
            <Row>
                <Col md={4} className={'mt-3'}>
                    <Image width={250} height={250} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={' mt-3 d-flex justify-content-center align-items-center'}>
                        <h2 className={'mt-3 d-flex justify-content-center align-items-center'}>{device.name}</h2>
                        <div>
                            <h1 className={'mt-3 d-flex justify-content-center align-items-center'}> {`${device.price} $`}</h1>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Button> Bay </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;
