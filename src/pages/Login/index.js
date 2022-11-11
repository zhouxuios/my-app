import './index.css'
import { Button, Form, Input } from 'antd';
const Login = () => {
    const onClick = () => {

    }
    // const onRegist = () => {
    //     console.log('注册')
    // }
    return (
    <div className="login-view">
       <div className='container-view'>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <div className='form'>
            <Input style={{marginTop:'40px'}} placeholder="请输入账号" />
            <Input.Password style={{marginTop:'30px'}} placeholder="请输入密码" />
            <Button style={{marginTop:'30px'}} type="primary" block onClick={onClick}> 登录 </Button>
          </div>
       </div>
    </div>
    )
}
export default Login