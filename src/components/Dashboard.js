import React, { Component } from "react";
import { Table, PageHeader } from "antd";
import "antd/dist/antd.css";
const columns = [
  {
    title: "Product Name",
    dataIndex: "name"
  }
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Product ${i}`
  });
}

class Dashboard extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Dashboard">
          <a href="/">Logout</a>
        </PageHeader>
        <a href="/transactions">
          <Table columns={columns} dataSource={data} />
        </a>
      </div>
    );
  }
}
export default Dashboard;
