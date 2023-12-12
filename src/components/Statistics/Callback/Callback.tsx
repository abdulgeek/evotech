/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar } from "react-chartjs-2";
import './Callback.css';

/* eslint-disable @typescript-eslint/no-unused-vars */
const callDistributionData: any = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
        {
            label: 'Inbound',
            data: [120, 150, 100, 170, 110, 130, 160],
            backgroundColor: 'green',
        },
        {
            label: 'Outbound',
            data: [80, 100, 90, 110, 95, 120, 105],
            backgroundColor: 'blue',
        }
    ]
};

const barOptions = {
    responsive: true,
    scales: {
        x: {
            stacked: false
        },
        y: {
            stacked: false
        }
    },
    plugins: {
        legend: { display: false }
    }
};

const CustomLegend = () => (
    <div className="custom-legend">
        <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: 'green' }}></span>
            Inbound
        </div>
        <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: 'blue' }}></span>
            Outbound
        </div>
    </div>
);

const Callback = () => {
    return (
        <div className="call-distribution-layout">
            <div className="call-distribution-container">
                <h3 className='header'>Call Distribution</h3>
                <hr style={{ margin: '10px 0', fill: 'rgba(0, 0, 0, 0.25)' }} />
                <Bar data={callDistributionData} options={barOptions} />
            </div>
            <CustomLegend />
        </div>
    );
};


export default Callback