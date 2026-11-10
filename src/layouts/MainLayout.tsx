import React from 'react';
import { Layout } from 'antd';
import HeroSection from '../components/HeroSection';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import FooterContent from '../components/FooterContent';

const { Footer, Content } = Layout;

const contentStyle: React.CSSProperties = {
  width: '100%',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  background: '#131313',
  borderTop: '3px solid #286b74',
  padding: '18px 24px',
};

const layoutStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  width: '100%',
};

const MainLayout: React.FC = () => (
  <Layout style={layoutStyle}>
    <Content style={contentStyle}>
      <HeroSection />
      <Solutions />
      <Contact />
    </Content>
    <Footer style={footerStyle}><FooterContent /></Footer>
  </Layout>
);

export default MainLayout;