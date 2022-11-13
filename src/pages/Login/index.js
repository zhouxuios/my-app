import './index.css'
import { Button, Input ,Modal,Form,message} from 'antd';
import { useState,useRef} from 'react';
import {login,regist} from '../../http/api'
import {checkEmail}  from '../../util/validator'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const registRef = useRef(null)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const navigateTo = useNavigate()
    const onLogin = () => {
       const params = {
          username,
          password
       }
       login(params).then(res => {
        if(res.code === 200){
          message.success('登录成功')
          const token = res.token
          localStorage.setItem('my-app-token',token)
          navigateTo('/nav1')
        }
       }).catch(err => {
        console.log(err)
       })
    }
    const onRegist = () => {
      registRef.current.resetFields()
      setOpen(true)
   }
   const onFinish = (e) => {
      console.log('表单数据--',e)
      const {email} = e
      if(email){
        if(!checkEmail(email)) {
          return message.error('邮箱格式有误!',1)
        }
      }
      regist(e).then(res => {
        console.log(res)
        if(res.code === 200){
          setOpen(false)
          message.success('注册成功!')
        }
      }).catch(err => {
        console.log(err)
      })
      
   }
   const onFinishFailed = () => {
    
  }

    const handleChangeName = (e) => {
       setUsername(e.target.value)
    }
    const handleChangePassword = (e) => {
       setPassword(e.target.value)
    }
    return (
    <div className="login-view">
       <div className='container-view'>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <div className='form'>
            <Input style={{marginTop:'40px'}} onChange={handleChangeName} placeholder="请输入账号" value={username}/>
            <Input.Password style={{marginTop:'30px'}} onChange={handleChangePassword} placeholder="请输入密码" value={password}/>
            <Button style={{marginTop:'30px'}} type="primary" block onClick={onLogin}> 登录 </Button>
            <Button style={{marginTop:'20px'}} type="primary" block onClick={onRegist}> 注册 </Button>
          </div>
       </div>
       <Modal
        title="注册"
        centered
        okText='确定'
        cancelText='取消'
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={400}
      >
        <Form
          ref={registRef}
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
          onFinishFailed={onFinishFailed}
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
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: false,
                message: '请输入邮箱!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    )
}
export default Login