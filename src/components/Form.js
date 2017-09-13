import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import { Row, Col } from 'react-bootstrap';

import '../App.css';

import {connect} from 'react-redux';
import {handleSlider} from '../actions/home/handleSlider';

let obj = {};

class Form extends Component {
    
    handleAgeSlider = (event, value) => {
        obj = {id: 'age', val: value};
        this.props.handleSlider(obj);
    }

    handleLifeTimeSlider = (event, value) => {
        obj = {id: 'lifetime', val: value};
        this.props.handleSlider(obj);
    }

    handleSignupSlider = (event, value) => {
        obj = {id: 'sign_date', val: value};
        this.props.handleSlider(obj);
    }

    handleLastTimeSlider = (event, value) => {
        obj = {id: 'last_timestamp', val: value};
        this.props.handleSlider(obj);
    }

    handleGiftPriceSlider = (event, value) => {
        obj = {id: 'gift_price', val: value};
        this.props.handleSlider(obj);
    }

    render() {
        const {age, lifetime, sign_date, last_timestamp, gift_price} = this.props
        return (
            <div>
                <Row style={styles.form}>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <span>Age</span>
                        <div style={styles.slider}>
                            <div style={styles.sliderWrapper}>
                                <Slider 
                                    min={20}
                                    max={60}
                                    step={10}
                                    value={age}
                                    onChange={this.handleAgeSlider}
                                />
                                </div>
                            <span style={styles.span}>{age}</span>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <span>Lifetime value</span>
                        <div style={styles.slider}>
                            <div style={styles.sliderWrapper}>
                                <Slider 
                                    min={100}
                                    max={500}
                                    step={100}
                                    value={lifetime}
                                    onChange={this.handleLifeTimeSlider}
                                />
                                </div>
                            <span style={styles.span}>{lifetime}</span>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <span>Signup date</span>
                        <div style={styles.slider}>
                            <div style={styles.sliderWrapper}>
                                <Slider 
                                    min={1}
                                    max={10}
                                    step={1}
                                    value={sign_date}
                                    onChange={this.handleSignupSlider}
                                />
                                </div>
                            <span style={styles.span}>{sign_date}</span>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} style={styles.col}>
                        <span>Last company interaction</span>
                        <div style={styles.slider}>
                            <div style={styles.sliderWrapper}>
                                <Slider 
                                    min={1}
                                    max={8}
                                    step={1}
                                    value={last_timestamp}
                                    onChange={this.handleLastTimeSlider}
                                />
                                </div>
                            <span style={styles.span}>{last_timestamp}</span>
                        </div>

                    </Col>
                </Row>
                <Row style={styles.form}>
                    <Col lg={12} md={12} sm={12} xs={12} style={styles.col}>
                            <span>Gift price</span>
                            <div style={styles.slider1}>
                                <div style={styles.sliderWrapper}>
                                    <Slider 
                                        min={3}
                                        max={100}
                                        step={1}
                                        value={gift_price}
                                        onChange={this.handleGiftPriceSlider}
                                    />
                                    </div>
                                <span style={styles.span1}>{gift_price}</span>
                            </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const styles = {
    paper: {
        height: 800,
        width: '90%',
        margin: '5% 5%'
    },
    form: {
        padding: '20px 20px 0 20px',
        height: '100px'
    },
    viewButton: {
        display: 'flex',
        justifyContent:'flex-end',
        paddingRight: '30px',
        marginTop: '30px'
    },
    slider: {
        display: 'flex',
    },
    slider1: {
        display: 'flex',
        height: '60px'
    },
    sliderWrapper: {
        width: '100%',
        height: '60px'
    },
    span: {
        padding: '7%'
    },
    span1: {
        padding: '1.5%'
    },
    col: {
        height: '80px'
    }
    
}

const mapStateToProps = (state) => {
    return {
        age: state.home.age,
        lifetime: state.home.lifetime,
        sign_date: state.home.sign_date,
        last_timestamp: state.home.last_timestamp,
        gift_price: state.home.gift_price
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSlider: (obj) => {
            dispatch(handleSlider(obj))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);