import React from 'react';
import { ConfigProvider, theme } from 'antd';
import MainLayout from '../layouts/MainLayout';
import '@fontsource/open-sans';

const colorBlue = '#286b74';
const colorBlack = '#131313';
// const colorPrimary = '#629ac3';
// const colorPrimary = '#00669B';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: colorBlue,
        fontFamily: `'Open Sans', Arial, sans-serif`,
        colorPrimaryBg: colorBlack,
        colorLink: 'lightgrey',
        colorLinkHover: 'white',
      },
      components: {
        Button: {
          colorPrimary: colorBlue,
        },
        Anchor: {
          colorPrimary: colorBlue,
          colorPrimaryBg: colorBlack,
        },
      },
    }}
  >
    <MainLayout />
  </ConfigProvider>
);

export default App;