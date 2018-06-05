import React from 'react'
import { connect } from 'react-redux';
import { Slider, Row, Col } from 'antd';


const filters = [
  {
    name: 'GDP (PPP)',
    url: 'data/gdp_ppp/2017.json',
    range: [681, 124927],
  },
  {
    name: 'Population',
    url: 'data/population/2017.json',
    range: [800, 1390900000],
  },
];

function Filters() {
  return (<div>
    <Row gutter={16}>
      {filters.map(el => <Col key={el.name} span={6}>
        <span>{el.name}</span>
        <Slider range step={10000} min={el.range[0]} max={el.range[1]} defaultValue={el.range}/>
      </Col>)}
    </Row>
  </div>);
}

export default connect()(Filters);