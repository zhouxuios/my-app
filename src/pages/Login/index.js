import './index.css'
import { Button, Form, Input } from 'antd';
const Login = () => {
    const onFinish = () => {

    }
    const onRegist = () => {
        console.log('注册')
    }
    return (
    <div className="login-view">
       <div className='container-view'>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <div>
          <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input />
            </Form.Item>
        
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入用户密码!',
                },
              ]}
            >
               <Input.Password />
            </Form.Item>
        
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
            </Form.Item>
        
            <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button type="primary" style={{marginLeft:20}} onClick={onRegist}>
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
       </div>
    </div>
    )
}
export default Login