import {Layout,Menu} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import React,{useState} from 'react'
import './index.css'
import { Outlet,useLocation,useNavigate} from 'react-router-dom';
const {Header,Sider,Content} = Layout
const ComomonLayout = (props) => {
    const [collapsed,setCollapsed] = useState(false);
    const items = [
      {
        key:'/nav1',
        icon:<HomeOutlined />,
        label: '概览',
      },
      {
        key:'/nav2',
        icon:<VideoCameraOutlined />,
        label: 'nav2',
      },
      {
        key:'/nav3',
        icon:<UploadOutlined />,
        label: 'nav3',
      }
    ]
    const location = useLocation()
    const navigate = useNavigate()
    const onClickHandle = (e) => {
       navigate(e.key)
    };
    return (
      <Layout className='main'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='logo'></div>
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={[location.pathname]}
                items={items}
                onClick={onClickHandle}
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