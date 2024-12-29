import React from 'react';
import { Divider, List, Typography, Space } from 'antd';
import { GithubOutlined, ClusterOutlined, AmazonOutlined, FileOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

const solutionsData = [
  {
    title: 'Infrastructure as Code',
    description: 'Define and manage infrastructure as code for your projects',
    avatar: <ClusterOutlined />
  },
  {
    title: 'Release Notes',
    description: 'Generate release notes for your projects',
    avatar: <FileOutlined />
  },
];

const Deliver: React.FC = () => (
  <>
    <Paragraph style={{ textAlign: 'center' }}>
      Our AI tools can automate deployment pipelines and generate end-user documentation, ensuring seamless delivery of well-documented, high-quality software products.
    </Paragraph>
    <List
      itemLayout="horizontal"
      dataSource={solutionsData}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={item.avatar}
            title={<a href="#">{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
    <Divider>
      <Space size="middle">
        <AmazonOutlined style={{ fontSize: '32px' }} />
        <GithubOutlined style={{ fontSize: '32px' }} />
      </Space>
    </Divider>
  </>
);

export default Deliver;