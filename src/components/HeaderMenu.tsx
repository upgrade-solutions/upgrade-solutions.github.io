import React from 'react';
import { Anchor, theme } from 'antd';
import type { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';

const items: AnchorLinkItemProps[] = [
  {
    title: 'Home',
    key: 'home',
    href: '#home',
  },
  {
    title: 'Solutions',
    key: 'solutions',
    href: '#solutions',
  },
  {
    title: 'Contact',
    key: 'contact',
    href: '#contact',
  }
];

const App: React.FC = () => {
  const { token } = theme.useToken();

  const menuStyle: React.CSSProperties = {
    backgroundColor: token.colorPrimaryBg,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2em',
    top: -10,
  };

  return (
    <div style={{ padding: 20 }}>
      <Anchor direction="horizontal" items={items} style={menuStyle} targetOffset={100} />
    </div>
  );
};

export default App;