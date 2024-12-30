import React from 'react';
import { Divider, List, Typography, Space, Flex } from 'antd';
import { GithubOutlined, ClusterOutlined, CodeOutlined, IdcardOutlined } from '@ant-design/icons';
const { Paragraph, Link } = Typography;

const solutionsData = [
  {
    title: 'UI Components',
    description: 'Create UI components for your projects',
    avatar: <IdcardOutlined />
  },
  {
    title: 'APIs',
    description: 'Generate APIs for your projects',
    avatar: <ClusterOutlined />
  },
];

const Develop: React.FC = () => (
  <>
    <Paragraph style={{ textAlign: 'center' }}>
      We use AI-powered tools to assist in representing domain logic accurately while automating repetitive tasks, so developers can focus on crafting high-quality software.
    </Paragraph>
    <List
      itemLayout="horizontal"
      // grid={{ gutter: 16, column: 3 }}
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
        <GithubOutlined style={{ fontSize: '32px' }} />
      </Space>
    </Divider>
  </>
);

export default Develop;