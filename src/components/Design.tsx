import React from 'react';
import { Divider, List, Typography, Space } from 'antd';
import { FileTextOutlined, UnorderedListOutlined, ApartmentOutlined, SlackOutlined } from '@ant-design/icons';
import FigmaIcon from './icons/FigmaIcon';
const { Paragraph } = Typography;

const solutionsData = [
  {
    title: 'Work Item Generator',
    description: 'Generate work items for your projects and sync with Jira, Trello, or Asana',
    avatar: <UnorderedListOutlined />
  },
  {
    title: 'Product Requirements',
    description: 'Define and track product requirements for your projects',
    avatar: <FileTextOutlined />
  },
  {
    title: 'Architecture Diagrams',
    description: 'Create architecture diagrams for your projects',
    avatar: <ApartmentOutlined />
  },
];

const Design: React.FC = () => (
  <>
    <Paragraph style={{ textAlign: 'center' }}>
      We leverage Generative AI to create wireframes, user flows, and architecture docs, accelerating the design phase while ensuring user-centered documentation.
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
        <SlackOutlined style={{ fontSize: '32px', color: 'lightgrey' }} />
        {/* <FigmaIcon style={{ fontSize: '32px' }} /> */}
      </Space>
    </Divider>
  </>
);

export default Design;