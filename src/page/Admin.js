import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrands from "../components/modals/CreateBrands";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandsVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className={'d-flex justify-content-center align-items-center'}>
            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-danger"}
                className={'mt-2'}
            >
                Type
            </Button>
            <Button
                onClick={() => setBrandsVisible(true)}
                variant={"outline-danger"}
                className={'mt-2'}
            >
                Brand
            </Button>
            <Button
                onClick={() => setDeviceVisible(true)}
                variant={"outline-danger"}
                className={'mt-2'}
            >
                Device
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrands show={brandVisible} onHide={() => setBrandsVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>

    );
};

export default Admin;
