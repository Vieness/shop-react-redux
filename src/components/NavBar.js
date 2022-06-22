import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/constants";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to={'/'} href="/">Bay Phone</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button onClick={()=> navigate(LOGIN_ROUTE) }
                                variant={'outline-danger'}
                        >
                            Log Out
                        </Button>
                        <Button onClick={()=> navigate(ADMIN_ROUTE) }
                                variant={'outline-danger'}
                                className={'ms-lg-3'}
                        >
                            Admin Panel
                        </Button>
                    </Nav>
                    : <Nav>
                        <Button variant={'outline-danger'} onClick={() => user.setIsAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
