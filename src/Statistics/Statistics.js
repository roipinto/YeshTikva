import React, { Component } from 'react';
import firebase from '../Firebase/Firebase';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shifts: [],
            chartData: {
                labels: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                datasets: [
                    {
                        label: 'משמרות',
                        data: [
                            6,
                            18,
                            15,
                            10,
                            9,
                            10,
                            12,
                            12,
                            12,
                            12,
                            12,
                            11
                        ],
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',
                            'rgba(300, 0, 0, 0.4)',]
                    }]
            }
        }
    }


    componentDidMount() {
        const itemsRef = firebase.database().ref(`shifts/`);
        itemsRef.on('value', (snapshot) => {
            let shifts = snapshot.val();
            let newState = [];
            for (let shift in shifts) {
                newState.push({
                    id: shift,
                    date: shifts[shift].date,
                    time: shifts[shift].time,
                    patient: shifts[shift].patient,
                    volunteer: shifts[shift].volunteer,
                    hospital: shifts[shift].hospital,
                    month: shifts[shift].month
                });

            }
            this.setState({
                shifts: newState
            });

        }

        );
    }


    render() {
        return (
            
            <div className="chart">
                
                <Bar
                    
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'כמות משמרות עבור כל חודש',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position:'bottom'
                        }
                        
                      //  maintrainAspectRatio: false
                    }}
                    />
               
               

            </div>
            
            )
    }
}

export default Statistics;