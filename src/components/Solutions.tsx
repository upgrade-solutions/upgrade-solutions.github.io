import React, { useState, useEffect } from 'react';
import { Steps, Typography, theme } from 'antd';
import { FileTextOutlined, LayoutOutlined, CodeOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
import Discover from './Discover';
import Design from './Design';
import Develop from './Develop';
import Deliver from './Deliver';
const { Title } = Typography;

const Solutions: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = React.useState(0);
  const [isAutoTransition, setIsAutoTransition] = useState(true);

  const iconStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '50%',
    backgroundColor: token.colorPrimary,
    // borderColor: token.colorPrimaryBg,
    padding: '16px',
    margin: '-10px 0 0 -10px',
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    marginTop: 16,
  };

  const getIconStyle = (index: number) => {
    if (current === index) {
      return { ...iconStyle, color: 'white' };
    } else {
      return iconStyle;
    }
  }

  const getStatus = (index: number) => {
    if (current === index) {
      return "process";
    } else {
      return "wait";
    }
  }

  const steps = [
    { title: 'Discover', content: <Discover />, icon: <FileTextOutlined style={getIconStyle(0)} />, status: getStatus(0) },
    { title: 'Design', content: <Design />, icon: <LayoutOutlined style={getIconStyle(1)} />, status: getStatus(1) },
    { title: 'Develop', content: <Develop />, icon: <CodeOutlined style={getIconStyle(2)} />, status: getStatus(2) },
    { title: 'Deliver', content: <Deliver />, icon: <DeploymentUnitOutlined style={getIconStyle(3)} />, status: getStatus(3) },
  ];

  useEffect(() => {
    if (isAutoTransition) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % steps.length);
      }, 7000); // 7 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoTransition, steps.length]);

  const handleStepClick = (index: number) => {
    setCurrent(index);
    setIsAutoTransition(false);
  };

  return (
    <div id="solutions" style={{ maxWidth: 620, margin: '50px auto 40px auto', padding: '0 16px', color: 'black !important' }}>
      {/* <Title level={3} style={{ textAlign: 'center' }}>Solutions</Title> */}
      <Steps 
        current={current} 
        labelPlacement="vertical" 
        items={steps}
        onChange={handleStepClick}
        style={{ marginTop: 40 }}
      />
      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
  
}

export default Solutions;