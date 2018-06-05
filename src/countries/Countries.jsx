import React from 'react'
import { connect } from 'react-redux';
import { Table } from 'antd';

import { fetchCountries } from './actions';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

class Countries extends React.Component {

  componentDidMount() {
    this.props.fetchCountries();
  };

  render() {
    return <Table columns={columns} dataSource={this.props.list} rowKey="name"/>;
  }
}

const mapStateToProps = state => ({
  list: state.countries.list,
});

const mapDispatchToProps = {
  fetchCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);