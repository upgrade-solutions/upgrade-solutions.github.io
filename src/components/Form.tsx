import { Button, Form, Input, Steps, Divider, Table, Typography } from 'antd';
import type { TableProps } from 'antd';
const { Text } = Typography;
import { useState } from 'react';
// import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface SectionType {
  key: React.Key;
  title: string;
  description: string;
}

const defaultSections: SectionType[] = [
  { key: 0, title: 'Business Requirements', description: 'A top-level section for business requirements' },
  { key: 1, title: 'Overview', description: 'A summary of the proposal (under Business Requirements)' },
  { key: 2, title: 'User Roles', description: 'The primary users (by role) for the feature or project (under Business Requirements)' },
  { key: 3, title: 'Functional Requirements', description: 'The scope of the feature or project (under Business Requirements). Also include a section of what is out of scope.' },
  { key: 4, title: 'Technical Requirements', description: 'A top-level section for technical requirements' },
  { key: 5, title: 'Resources, Actions, and Attributes', description: 'Key Resources (nouns), Actions (verbs, on each resource), and Attributes (on each resource) (under Technical Requirements)' },
  { key: 6, title: 'Pages', description: 'A list of pages for the app (under Technical Requirements)' },
  { key: 7, title: 'Nonfunctional Requirements', description: 'A list of nonfunctional requirements, like availability or scalability (under Technical Requirements)' },
];

const columns: TableProps<SectionType>['columns'] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

import type { FormInstance } from 'antd';

interface ConfigurationProps {
  form: FormInstance;
}
  // const sections = form.getFieldValue('sections') || defaultSections;
const Configuration: React.FC<ConfigurationProps> = ({ form }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(defaultSections.map((section) => section.key));

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    form.setFieldsValue({ sections: defaultSections.filter((section) => newSelectedRowKeys.includes(section.key)) });
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<SectionType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Divider>Client Conversation</Divider>
      <Form.Item name="conversation">
        <Input.TextArea rows={4} placeholder="Add conversation transcript here..." />
      </Form.Item>
      <Divider>Proposal Sections</Divider>
      <Form.Item name='sections'>
        <Table<SectionType> 
          columns={columns} 
          dataSource={defaultSections} 
          rowSelection={rowSelection}
          pagination={false} 
          style={{ marginBottom: 20 }}
          size="middle"
        />
      </Form.Item>
      <Button block type="primary" htmlType="submit">
        Generate
      </Button>
    </>
  )
}

const ProposalForm: React.FC = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = React.useState('Nothing to see here...');

  const onFinish = async (values: any) => {
    const response = await fetch("http://0.0.0.0:8000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      console.error("Response is not OK");
      return;
    }
    if (!response.body) {
      console.error("Response body is null");
      return;
    }
    
    setCurrentStep(1);
    setResults(''); // Clear the state
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        setResults((prev) => prev + chunk); // Append chunk to the state
      }
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const steps = [
    {
      title: 'Configuration',
      content: <Configuration form={form} />,
    },
    {
      title: "Proposal",
      content: <Text>{results}</Text>,
    }
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onChange = (value: number) => {
    setCurrentStep(value);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ 
        sections: defaultSections 
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ marginBottom: 60 }}
    >
      <Steps 
        current={currentStep} 
        items={items} 
        labelPlacement="vertical" 
        style={{ marginBottom: '20px' }} 
        onChange={onChange} // enable this to allow clicking on steps to navigate
      />
      {steps[currentStep].content}
    </Form>
  );
}

export default ProposalForm;