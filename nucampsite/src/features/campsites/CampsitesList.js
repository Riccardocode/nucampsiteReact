import {useSelector} from 'react-redux';
import React from 'react';
import {Col,Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard"
import {selectAllCampsites} from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return(
        <Row className='ms-auto'>
            {
                campsites.map(campsite =>{
                    return(
                        <Col 
                        className='m-4' 
                        md='5' 
                        key={campsite.id}
                        >
                            <CampsiteCard campsite={campsite}/>
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default CampsitesList;