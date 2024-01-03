import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale } from 'chart.js/auto';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SimpleChart = () => {
  // Explicitly register linear and category scales
  Chart.register(LinearScale, CategoryScale);

  // Sample data for the chart
  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Purple Line',
        borderColor: 'purple',
        backgroundColor: 'rgba(128,0,128,0.2)', // Purple with some transparency
        borderWidth: 1,
        data: [10, 20, 15, 25, 18, 30, 22],
      },
      {
        label: 'Grey Line',
        borderColor: 'grey',
        backgroundColor: 'rgba(169,169,169,0.2)', // Grey with some transparency
        borderWidth: 1,
        data: [15, 25, 20, 30, 22, 35, 28],
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      x: {
        display: true, // Hide x-axis labels and ticks
      },
      y: {
        display: false, // Hide y-axis labels and ticks
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px',
  });

  // Animate the chart container when it comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  },  [controls, inView]);

  return (
    <motion.div className='w-96 h-96 right-0 opacity-50 absolute' ref={ref} animate={controls} initial={{ y: 50, opacity: 0 }}>
      <Line data={data} options={options}  />
    </motion.div>
  );
};

export default SimpleChart;
