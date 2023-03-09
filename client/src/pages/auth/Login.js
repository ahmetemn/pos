
import { Form, Input, Button, Checkbox } from "antd"
import { Link } from "react-router-dom";
import RegisterCarousel from "./RegisterCarousel";
const Login = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-between h-full ">


                <div className="flex flex-col h-full justify-center px-20 ">
                    <h1 className="text-center text-5xl font-bold mb-5">LOGO</h1>
                    <Form layout="vertical" htmlType="onSubmit">

                        <Form.Item label="Email" name={"email"} rules={[{ required: true }]}>
                            <Input type="email"></Input>
                        </Form.Item>
                        <Form.Item label="Password" name={"password"} rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className="flex  justify-between">
                                <Checkbox>
                                    Remember Me
                                </Checkbox>
                                <Link className="font-bold text-purple-900">Forgot Password ?</Link>
                            </div>

                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" className="font-bold text-center" htmlType="submit" block> Login</Button>
                        </Form.Item>

                    </Form>
                    <div>Do you haven't a account ?  <Link to="/auth/register" className="text-purple-700 font-bold">Register</Link></div>
                </div>






                <div className="xl:w-4/6 bg-purple-900">
                    <RegisterCarousel />
                </div>
            </div>
        </div>
    )
}


export default Login; 