import { CAMPSITES } from '../../app/shared/CAMPSITES';
import React from 'react';
import {Col,Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard"

const CampsitesList = () => {
    return(
        <Row className='ms-auto'>
            {
                CAMPSITES.map(campsite =>{
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