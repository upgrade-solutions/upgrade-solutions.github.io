import React from 'react';
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

  const iconStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '50%',
    backgroundColor: token.colorPrimary,
    // borderColor: token.colorPrimaryBg,
    padding: '16px',
    marginLeft: '-10px',
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

  return (
    <div id="solutions" style={{ maxWidth: 600, margin: '50px auto 40px auto', color: 'black !important' }}>
      {/* <Title level={3} style={{ textAlign: 'center' }}>Solutions</Title> */}
      <Steps 
        current={current} 
        labelPlacement="vertical" 
        items={steps}
        onChange={setCurrent}
        style={{ marginTop: 40 }}
      />
      <div style={contentStyle}>{steps[current].content}</div>
    </div>
  );
  
}

export default Solutions;