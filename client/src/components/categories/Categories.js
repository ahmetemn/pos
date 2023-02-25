
import "./Style.css";
import {Form, Modal  , Input, Button, message} from 'antd';
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons"
const Categories = ({categories}) => {
    const [form ] = Form.useForm()

    const onFinish = (values) =>{

        try {
            
            fetch("http://localhost:8800/api/category", {
                method:"POST",
                body:JSON.stringify(values),
                headers:{"Content-type":"application/json; charset=UTF-8"},
            })
            message.success("Category added")
            form.resetFields()
        } catch (error) {
            console.log(error)
        }
    }


    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const showModal = () => {
        setIsAddModalOpen(true);
      };
      const handleCancel = () => {
        setIsAddModalOpen(false);
      };
    return (
        <>


            <ul className=" gap-5 flex md:flex-col text-lg">

               {
                 categories.map((item , i ) =>{
                    return(
                        <div key={i}>

                        <li className="categroy-item">{item.title}</li>
                        </div>
                       
                    )
                 })
               }
                
              


                <li   onClick={showModal} className="categroy-item !bg-purple-800 hover:opacity-80" >
                    <PlusOutlined />
                </li>
                <Modal title="Add Category"  open={isAddModalOpen}   onCancel={handleCancel} footer={false}>
                     <Form  className="font-bold"  layout="vertical"  onFinish={onFinish} form ={form}>
                         <Form.Item name="title" label="Category"    rules={[{ required: true  , message:"Category is required !"}]} >
                             <Input />
                         </Form.Item>
                         <Button block type="primary" htmlType="submit" className="font-bold ">Create</Button>
                     </Form>
                </Modal>
            </ul>
        </>
    )
}

export default Categories;

