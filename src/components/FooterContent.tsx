import { Row, Col, Space } from 'antd';

const FooterContent: React.FC = () => (
  <>
    <Row style={{ maxWidth: 800, margin: '0 auto', padding: '0 10px' }}>
      <Col span={12} style={{ textAlign: 'left', fontSize: '0.9em' }}>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Upgrade Solutions LLC
        </div>
      </Col>
      <Col span={12} style={{ textAlign: 'right', fontSize: '0.9em' }}>
        <Space size="middle">
          <a href="https://www.privacypolicies.com/live/728108d2-3caf-465b-9fb4-3746765b8434" target="_blank">Privacy Policy</a>
          <a href="https://drive.google.com/file/d/1Ds0W0xvZ8Du8DAGXXuufa3ShhGcNgEo9/view?usp=sharing" target="_blank">Terms of Use</a>
        </Space>
      </Col>
    </Row>
  </>
);

export default FooterContent;