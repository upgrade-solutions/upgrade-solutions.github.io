import React from 'react';
import { Divider, List, Space, Typography } from 'antd';
import { FileTextOutlined, LayoutOutlined, BookOutlined, GoogleOutlined, SlackOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;

const solutionsData = [
  {
    title: 'AI Notetaker',
    description: 'Intelligent note-taking tool for defining and tracking requirements',
    avatar: <BookOutlined />
  },
  {
    title: 'Scope of Work',
    description: 'Define and track the scope of work for your projects',
    avatar: <FileTextOutlined />
  },
  {
    title: 'Wireframes',
    description: 'Create wireframes for your projects',
    avatar: <LayoutOutlined />
  },
];

const Discover: React.FC = () => (
  <>
    <Paragraph style={{ textAlign: 'center' }}>
      Our AI tools can gather and analyze information from various sources to generate detailed scopes of work, ensuring a clear understanding of project requirements and objectives.
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
        <GoogleOutlined style={{ fontSize: '32px' }} />
        <SlackOutlined style={{ fontSize: '32px' }} />
      </Space>
    </Divider>
  </>
);

export default Discover;