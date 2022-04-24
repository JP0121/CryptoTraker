import React from 'react'
import {Chart} from 'react-chartjs-2';
import 'chart.js/auto';
import {Col, Row, Typography} from 'antd';
import moment from 'moment';



const {Title} = Typography;



const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = [];
  const coinTimestamp = [];
 

  for(let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimestamp.push(moment.unix(coinHistory?.data?.history[i].timestamp).format('YYYY-MM-DD'));
  }

  

  const config = {
    labels: coinTimestamp.reverse(),
    options: {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }]
      }
  },
    datasets: [
      {
          label:'Price in USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd'

      }]
  }
  


  
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice} </Title>
        </Col>

      </Row>
      <Chart type='line' data={config} />
    
    
    </>
  )
}

export default LineChart


