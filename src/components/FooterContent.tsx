import { Row, Col, Space } from 'antd';

const FooterContent: React.FC = () => (
  <>
    <Row style={{ maxWidth: 800, margin: '0 auto' }}>
      <Col span={12} style={{ textAlign: 'left' }}>
        <div className="copyright">
          &copy; 2023 Upgrade Solutions LLC
        </div>
      </Col>
      <Col span={12} style={{ textAlign: 'right' }}>
        <Space size="middle">
          <a href="https://www.privacypolicies.com/live/728108d2-3caf-465b-9fb4-3746765b8434" target="_blank">Privacy Policy</a>
          <a href="https://drive.google.com/file/d/1Ds0W0xvZ8Du8DAGXXuufa3ShhGcNgEo9/view?usp=sharing" target="_blank">Terms of Use</a>
        </Space>
      </Col>
    </Row>
  </>
);

export default FooterContent;