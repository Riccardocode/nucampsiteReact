import React from 'react';
import {Col,Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard"
import {selectAllCampsites} from './campsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return(
        <Row className='ms-auto'>
            {
                campsites.map(campsite =>{
                    return(
                        <Col className='m-4' md='5' key={campsite.id}>
                            <CampsiteCard campsite={campsite}/>
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default CampsitesList;