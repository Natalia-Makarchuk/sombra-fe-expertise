import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { ConfigProvider } from 'antd'

import reportWebVitals from './reportWebVitals'
import App from './App'

import './styles/normalize.css'
import './styles/App.scss'
import './index.scss'
import qdsTheme from './styles/qdsTheme'

// Create a root ReactDOM instance and render the App within RecoilRoot and ConfigProvider for global state management and Ant Design theme customization
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigProvider theme={qdsTheme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ConfigProvider>
)

// Optional: measure and log web vitals for performance analysis
reportWebVitals()
