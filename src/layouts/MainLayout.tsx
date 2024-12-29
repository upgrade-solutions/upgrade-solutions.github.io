import React from 'react';
import { Layout, Typography, Divider, theme } from 'antd';
import HeaderMenu from '../components/HeaderMenu';
import HeroSection from '../components/HeroSection';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import FooterContent from '../components/FooterContent';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const contentStyle: React.CSSProperties = {
  width: '100%',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
};

const layoutStyle = {
  margin: '0 auto',
  padding: 0,
  // overflow: 'hidden',
  // minWidth: 400,
  // maxWidth: 600,
};

const MainLayout: React.FC = () => {
  const { token } = theme.useToken();

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '100%',
    height: 50,
    position: 'fixed',
    top: 0,
    zIndex: 1,
    backgroundColor: token.colorPrimaryBg,
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}><HeaderMenu /></Header>
      <Content style={contentStyle}>
        <HeroSection />
        <Solutions />
        <Contact />
      </Content>
      <Footer style={footerStyle}><FooterContent /></Footer>
    </Layout>
  )
};

export default MainLayout;