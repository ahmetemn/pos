
import { Form, Input, Button } from "antd"
import { Link } from "react-router-dom";
import RegisterCarousel from "./RegisterCarousel";
const Register = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full ">


                <div className="flex flex-col h-full justify-center px-20 ">
                    <h1 className="text-center text-5xl font-bold mb-5">LOGO</h1>
                    <Form layout="vertical" htmlType="onSubmit">
                        <Form.Item label="Username" name={"username"} rules={[{ required: true }]}>
                            <Input  ></Input>
                        </Form.Item>
                        <Form.Item label="Email" name={"email"} rules={[{ required: true }]}>
                            <Input type="email"></Input>
                        </Form.Item>
                        <Form.Item label="Password" name={"password"} rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Again Password" name={"passwordAgain"} rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" className="font-bold text-center" htmlType="submit" block> Register</Button>
                        </Form.Item>

                    </Form>
                    <div>Do you have a account ?  <Link to="/auth/login" className="text-purple-700 font-bold">Sign In</Link></div>
                </div>






                <div className="xl:w-4/6 bg-purple-900">
                     <RegisterCarousel />
                </div>
            </div>
        </div>
    )
}


export default Register; 