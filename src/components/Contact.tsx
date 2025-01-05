import { Image, Row, Col, Typography, theme } from 'antd';
import { MailOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import timImage from "../assets/tim.jpg";

const Contact: React.FC = () => {
  const { Title, Paragraph, Link } = Typography;
  const { token } = theme.useToken();

  return (
    <div id="contact" style={{ textAlign: 'center', backgroundColor: '#212121', padding: '40px 0', margin: 0 }}>
      <Title level={2}>Contact</Title>
      <Paragraph>
        Our team is led by Tim Kleier, an architect and engineer <br/>with 15 years of experience crafting customs software.<br />
      </Paragraph>
      <Image src={timImage.src} alt="tim" style={{ width: 200, borderRadius: '50%', marginBottom: '20px' }} preview={false} />
      <Row justify="center" gutter={[16, 16]}>
        <Col>
          <Link href="mailto:tim@upgradesolutions.io" target="_blank" rel="noopener noreferrer">
            <MailOutlined style={{ fontSize: '32px' }} />
          </Link>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/timkleier/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ fontSize: '32px' }} />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;