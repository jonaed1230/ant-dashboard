import React, { Component } from "react";

import { Table, PageHeader } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id"
  },
  {
    title: "Quantity",
    dataIndex: "quantity"
  },
  {
    title: "Time",
    dataIndex: "time"
  }
];

const data = [];
for (let i = 0; i < 10000; i++) {
  data.push({
    key: i,
    id: `${i}`,
    quantity: `${i}`,
    time: '12/ 01 /2019'
  });
}

class Transactions extends Component {
  state = {
    selectedRowKeys: []
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: []
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <PageHeader title="Transactions">
          <a href="/">Logout</a>
        </PageHeader>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default Transactions;
