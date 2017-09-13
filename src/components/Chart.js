import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'

import {connect} from 'react-redux';

import { Users } from '../constants/users';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Monthly',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(242,181,103,0.4)',
            borderWidth: 4,
            borderColor: 'rgba(242,181,103,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(242,181,103,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(242,181,103,1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },

        {
            label: 'Cumulative',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(86,168,249,0.4)',
            borderWidth: 4,
            borderColor: 'rgba(86,168,249,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'mitter',
            pointBorderColor: 'rgba(86,168,249,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(86,168,249,1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data
        }
    }

    getBudget = (users, gift_price) => {
        const monthly = [];
        const cumulative = [];
        let result = {};
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const num = users.filter(user => user.birthday === (i + 1)).length;
            monthly.push(gift_price * num);
            sum = sum + gift_price * num;
            cumulative.push(sum);
        }
        result = {'monthly': monthly, 'cumulative': cumulative};
        return result;
    }

    getUsers = (age, lifetime, sign_date, last_timestamp, gift_price) => {           
        let users = Users;
        let result = {};
        if(age === 20 && lifetime === 100 && sign_date === 1 && last_timestamp === 8){
            result = this.getBudget(users, gift_price);
            
        } else {
            if(age !== 20){
                users = users.filter(user => user.age >= age);
            }
            if(lifetime !== 100){                                
                users = users.filter(user => user.lifetime >= lifetime);            
            }
            if(sign_date !== 1){
                users = users.filter(user => user.sign_date >=sign_date);
            }
            if(last_timestamp !== 1){
                users = users.filter(user => user.last_timestamp <= last_timestamp);
            }
            result = this.getBudget(users, gift_price);
        }
        data.datasets[0].data = result.monthly;
        data.datasets[1].data = result.cumulative;
        return data;
    }

    render() {
        const { age, lifetime, sign_date, last_timestamp, gift_price } = this.props;
        let data = this.getUsers(age, lifetime, sign_date, last_timestamp, gift_price);
        return (
            <div style={{width: '100%'}}>
                <Line data={data} height = {100} />
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30, fontSize: 20}}>
                    <span>Total annual budget needed:&nbsp;&nbsp;&nbsp;</span>
                    <span>{data.datasets[1].data[11]}</span>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, null)(Chart);