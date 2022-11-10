import {Layout,Menu} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import React,{useState} from 'react'
import './index.css'
import { Outlet } from 'react-router-dom';
const {Header,Sider,Content} = Layout
const ComomonLayout = () => {
    const [collapsed,setCollapsed] = useState(false);
    return (
      <Layout className='main'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='logo'></div>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key:'1',
                        icon:<UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key:'2',
                        icon:<VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key:'3',
                        icon:<UploadOutlined />,
                        label: 'nav 3',
                    }
                ]}
            />
        </Sider>
        <Layout className='site-layout'>
            <Header className="site-layout-background" style={{ padding: 0 }}>
               {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                 className: 'trigger',
                 onClick: () => setCollapsed(!collapsed),
               })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Outlet></Outlet>
            </Content>
        </Layout>
      </Layout>
    )
}
export default ComomonLayout