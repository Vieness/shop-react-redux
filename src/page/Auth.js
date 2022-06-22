import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className={'d-flex justify-content-center align-items-center'}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 350}}>
                <h3 className={'m-auto mt-3'}> {isLogin ? 'Login' : 'Registration'} </h3>
                <Form className={'p-3 flex-column'}>
                    <Form.Control
                        placeholder={'Enter Email'}
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Enter Password'}
                    />
                    <Row className={' p-3 d-flex justify-content-center align-items-center'}>
                        {isLogin ?
                            <p>Don’t have an Account? <NavLink to={REGISTRATION_ROUTE}> Create now. </NavLink></p>
                            :<p> Have a Account? <NavLink to={LOGIN_ROUTE}> Login </NavLink></p>
                        }
                        <Button
                            variant={'outline-dark'}
                        >
                           Enter
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
