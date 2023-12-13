/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import './Statistics.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CallStats from "./CallStats/CallStats";
import Callback from "./Callback/Callback";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const generateRandomData = (numItems: any) => (
    Array.from({ length: numItems }, () => Math.round(Math.random() * 1500))
);

const generateDataForCustomPeriod = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const data = [];
    const labels = [];

    while (start <= end) {
        labels.push(start.toLocaleDateString());
        data.push(Math.round(Math.random() * 1500));
        start.setDate(start.getDate() + 1);
    }

    return { labels, data };
};

const yearlyData = generateRandomData(12);

const barOptions: any = {
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
        legend: {
            display: false,
            position: 'bottom' as const
        }
    }
};

const Statistics = () => {
    const [activeButton, setActiveButton] = useState('');
    const [startDate, setStartDate] = useState<any>(new Date());
    const [endDate, setEndDate] = useState<any>(new Date());
    const [showCustomDatePickers, setShowCustomDatePickers] = useState(false);
    const [chartData, setChartData] = useState<any>({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Number of Calls',
            data: yearlyData,
            backgroundColor: '#3276E8'
        }]
    });

    const handleCustomDateFilter = () => {
        const { labels, data } = generateDataForCustomPeriod(startDate, endDate);
        setChartData({
            ...chartData,
            labels: labels,
            datasets: [{ ...chartData.datasets[0], data: data }]
        });
    };

    const generateDataForPeriod = (days: number): number[] => {
        return Array.from({ length: days }, () => Math.round(Math.random() * 1500));
    };


    const handleButtonClick = (button: any) => {
        setActiveButton(button);
        setShowCustomDatePickers(button === 'Custom');

        let newLabels;
        let newData;

        switch (button) {
            case '7 days':
                newLabels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
                newData = generateDataForPeriod(7);
                break;
            case '15 days':
                newLabels = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`);
                newData = generateDataForPeriod(15);
                break;
            case '30 days':
                newLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
                newData = generateDataForPeriod(30);
                break;
            case '90 days':
                newLabels = Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`);
                newData = generateDataForPeriod(90);
                break;
            case 'yearly':
                newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                newData = yearlyData;
                break;
            case 'Custom':
                return;
            default:
                newLabels = chartData.labels;
                newData = chartData.datasets[0].data;
        }

        setChartData({
            ...chartData,
            labels: newLabels,
            datasets: [{ ...chartData.datasets[0], data: newData }]
        });
    };

    const resetDateRange = () => {
        setStartDate(new Date());
        setEndDate(new Date());
    };

    return (
        <div className="statistics">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-content">
                <DashboardNavbar />
                <div className="topbar">
                    <div className="topbar-left">
                        {['7 days', '15 days', '30 days', '90 days', 'Custom'].map((button) => (
                            <button
                                key={button}
                                className={`topbar-button ${activeButton === button ? 'active' : ''}`}
                                onClick={() => handleButtonClick(button)}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                    <div className="topbar-right">
                        <span className="custom">
                            Custom
                        </span>
                        <select className="topbar-select">
                            <option value="option1">All</option>
                            <option value="option1">Option 1</option>
                            <option value="option1">Option 2</option>
                        </select>
                    </div>
                </div>
                <div className="chart-container">
                    {showCustomDatePickers && (
                        <><div className="date-picker-container">
                            <ReactDatePicker
                                selected={startDate}
                                onChange={(date: Date | null) => setStartDate(date || new Date())}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate} />
                            <ReactDatePicker
                                selected={endDate}
                                onChange={(date: Date | null) => setEndDate(date || new Date())}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate} />
                        </div>
                            <button className="reset-button" onClick={handleCustomDateFilter}>Filter Data</button>
                            <button className="reset-button" onClick={resetDateRange}>Reset</button></>
                    )}
                    <Bar options={barOptions} data={chartData} />
                </div>
                <CallStats />
                <Callback />
            </div>
        </div>
    )
}

export default Statistics