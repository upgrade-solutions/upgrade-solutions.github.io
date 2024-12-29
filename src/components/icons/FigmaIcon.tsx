import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const FigmaSvg = () => (
  <svg width="1em" height="1em" viewBox="64 64 896 896" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="slack" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3a76.92 76.92 0 00-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"></path></svg> */}
    <title>Figma icon</title>
    {/* <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> */}
    <path id="path0_fill" style={{ fill: '#0acf83' }} d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
    <path id="path1_fill" style={{ fill: '#a259ff' }} d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
    <path id="path1_fill_1_" style={{ fill: '#f24e1e' }} d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
    <path id="path2_fill" style={{ fill: '#ff7262' }} d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
    <path id="path3_fill" style={{ fill: '#1abcfe' }} d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
    {/* <g id="SVGRepo_iconCarrier" /> */}
  </svg>
);

const FigmaIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FigmaSvg} {...props} />
);

export default FigmaIcon;
