import { Button, Form, Input, Modal ,message } from "antd";
import React  from "react";
 
  const Add = ({isAddModalOpen , handleCancel    }) =>{
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
            
        }
    }
    return (
      <Modal title="Add Category"  open={isAddModalOpen}   onCancel={handleCancel} footer={false}>
      <Form  className="font-bold"  layout="vertical"  onFinish={onFinish} form ={form}>
          <Form.Item name="title" label="Category"    rules={[{ required: true  , message:"Category is required !"}]} >
              <Input/>
          </Form.Item>
          <Button block type="primary" htmlType="submit" className="font-bold ">Create</Button>
      </Form>
 </Modal>
    )
  }

  export default Add;