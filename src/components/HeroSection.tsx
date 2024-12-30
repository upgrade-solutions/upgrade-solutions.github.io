import { Image, Button, Typography, theme } from 'antd';
import upgradeLogo from "../assets/upgrade_logo.png";
const { Title } = Typography;

const sectionStyle: React.CSSProperties = {
  margin: '0 auto',
  textAlign: 'center',
  maxWidth: '500px',
  padding: '0 20px',
};

const HeroSection = () => {
  const { token } = theme.useToken();

  return (
    <>
      <div id="home" style={{ 
        backgroundColor: token.colorPrimary,
        height: '380px',
        width: '100%',
        margin: 0
      }}>
        <div style={sectionStyle}>
          <Image src={upgradeLogo.src} alt="Upgrade Logo" preview={false} style={{ marginTop: 100 }} />
          <Title level={4} style={{ marginBottom: 40 }}>AI Solutions for Software Shops.</Title>
          <Button size="large" block>Contact</Button>
        </div>
      </div>
    </>

  );
}

export default HeroSection;