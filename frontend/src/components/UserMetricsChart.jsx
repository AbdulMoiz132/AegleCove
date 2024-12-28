import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useAegleCoveStore from '../store/AegleCoveStore';
import './UserMetricsChart.css'; // Import the CSS file for styling

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Function to calculate unified weight recommendation
const calculateUnifiedWeight = (currentWeight, height, metrics) => {
  const heightInMeters = height * 0.0254; // Convert height to meters
  const idealBMI = 22; // General ideal BMI
  const idealBFP = 20; // General ideal body fat percentage
  const idealLBM = 0.75 * currentWeight; // Ideal lean body mass

  // Target weights for each metric
  const targetWeightForBMI = idealBMI * (heightInMeters ** 2);
  const targetWeightForLBM = idealLBM / (1 - idealBFP / 100);
  const targetWeightForBFP = metrics.lbm / (1 - idealBFP / 100);

  // Unified target weight
  const unifiedTargetWeight = (targetWeightForBMI + targetWeightForLBM + targetWeightForBFP) / 3;

  // Weight difference
  const weightDifference = unifiedTargetWeight - currentWeight;

  return {
    unifiedTargetWeight: Math.round(unifiedTargetWeight * 100) / 100,
    weightDifference: Math.round(weightDifference * 100) / 100,
  };
};

const UserMetricsChart = () => {
  const metrics = useAegleCoveStore(state => state.user.patient_bodytrack);
  const user = useAegleCoveStore(state => state.user);

  // Calculate the unified weight recommendation
  const { unifiedTargetWeight, weightDifference } = calculateUnifiedWeight(
    user.weight,
    user.height,
    metrics
  );

  // Prepare the chart data
  const data = {
    labels: ['Body Mass Index', 'Lean Body Mass', 'Body Fat Percentage'],
    datasets: [
      {
        label: 'Your Metrics',
        data: [metrics.bmi, metrics.lbm, metrics.bfp],
        borderColor: 'white',
        backgroundColor: '#3db166',
        tension: 0.4,
      },
      {
        label: 'Ideal Values',
        data: [22, 0.75 * user.weight, 20],
        borderColor: '#3db166',
        backgroundColor: '#181818',
        tension: 0.4,
      },
    ],
  };

  // Chart options with a unified weight recommendation
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Weight Recommendation: ${
          weightDifference > 0
            ? `Increase by ${weightDifference} kg`
            : `Decrease by ${Math.abs(weightDifference)} kg`
        } to reach ${unifiedTargetWeight} kg`,
        font: {
          size: 12,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          display: false,
          borderColor:'white',
        },
        ticks: {
          color: '#3db166',
        },
        
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Health Metrics</h3>
      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserMetricsChart;
