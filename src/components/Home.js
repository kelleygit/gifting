import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import Form from './Form'
import Chart from './Chart';

import Paper from 'material-ui/Paper';
import '../App.css';


export default class Home extends Component {
    
    render() {
        return (
            <div>
                <Paper style={styles.paper} zDepth={2}>
                    <Form />
                    <Row className='chartWrapper'>
                        <Chart />
                    </Row>
                </Paper>
            </div>
        )
    }
}

const styles = {
    paper: {
        height: 800,
        width: '90%',
        margin: '5% auto'
    },
    form: {
        padding: '20px 20px 0 20px'
    },
    viewButton: {
        display: 'flex',
        justifyContent:'flex-end',
        paddingRight: '30px',
        marginTop: '30px'
    }
}