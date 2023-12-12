import Inbound from '../../../assets/inbound.svg'
import Outbound from '../../../assets/outbound.svg'
import Unanswered from '../../../assets/unanswered.svg'
import MissedCalls from '../../../assets/missedcalls.svg'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './CallStats.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const callStatsData = {
    inboundCalls: 120,
    outboundCalls: 95,
    unansweredCalls: 30,
    missedCalls: 25
};

const agentStatusData = {
    labels: ['Available', 'Away', 'Absent', 'Busy'],
    datasets: [{
        label: 'Agent Status',
        data: [50, 20, 10, 40],
        backgroundColor: ['green', 'red', 'orange', 'blue']
    }]
};

const CustomLegend = () => (
    <div className="custom-legend">
        {agentStatusData.labels.map((label, index) => (
            <div key={label} className="legend-item">
                <span className="legend-color" style={{ backgroundColor: agentStatusData.datasets[0].backgroundColor[index] }}></span>
                {label}
            </div>
        ))}
    </div>
);

const CallStats = () => {
    const { inboundCalls, outboundCalls, unansweredCalls, missedCalls } = callStatsData;

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
    };

    return (
        <div className="stats-container">
            <div className="stats-block">
                <h3 className='header'>Call Log Stats</h3>
                <hr style={{ margin: '10px 0', fill: 'rgba(0, 0, 0, 0.25)' }} />
                <div className='stats'>
                    <p><img className='call-log-img' src={Inbound} alt="Inbound" /><span className="stats-text">Number of Inbound Calls:</span> <span className="stats-number">{inboundCalls}</span></p>
                    <p><img className='call-log-img' src={Outbound} alt="Outbound" /><span className="stats-text">Number of Outbound Calls:</span> <span className="stats-number">{outboundCalls}</span></p>
                    <p><img className='call-log-img' src={Unanswered} alt="Unanswered" /><span className="stats-text">Number of Unanswered Calls:</span> <span className="stats-number">{unansweredCalls}</span></p>
                    <p><img className='call-log-img' src={MissedCalls} alt="Missed Calls" /><span className="stats-text">Number of Missed Calls:</span> <span className="stats-number">{missedCalls}</span></p>
                </div>
            </div>
            <div className="stats-block">
                <h3 className='header'>Agent Status</h3>
                <hr className="stats-divider" />
                <div className="agent-status-container">
                    <div className="pie-chart">
                        <Pie data={agentStatusData} options={pieOptions} />
                    </div>
                    <CustomLegend />
                </div>
            </div>

        </div>
    );
};

export default CallStats;
