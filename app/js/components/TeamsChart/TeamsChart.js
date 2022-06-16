import React, {useEffect, useState} from 'react';
// eslint-disable-next-line no-unused-vars
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';

// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

function TeamsChart() {

  const [labels, setLabels] = useState([])
  const [datasets, setDatasets] = useState([])

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:5000/api/teams");
      var data = result.data.slice(0, 6);

      var labels = data.map(item => {
        return item.name
      });

      setLabels(labels);
      setDatasets([{
        data: [34, 55, 38, 47],
        backgroundColor: [
          '#ffbb11',
          '#e7f0d1',
          '#ec3071',
          '#b3baaf',
          '#2a71d0',
          '#50AF95'
        ]
      }]);
    })();
  }, [])

  return (
    <div className="TeamsChart" style={{height: 350}}>
      Teams chart
    </div>
  );
}

export default TeamsChart;
