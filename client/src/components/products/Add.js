


import { Button, Form, Input, Modal, message, Select } from "antd";

import React from "react";

const Add = ({ isProducModalOpen, handleCancel, categories }) => {
    const [form] = Form.useForm()

    const onFinish = (values) => {

        try {

            fetch("http://localhost:8800/api/product", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
            message.success("Product added")
            form.resetFields()
        } catch (error) {

        }
    }


    return (
        <Modal title="Add New Product" open={isProducModalOpen} onCancel={handleCancel} footer={false}>
            <Form className="font-bold " layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item name="title" label="Product Name" rules={[{ required: true, message: "Product name is required !" }]} >
                    <Input />
                </Form.Item>
                    <Form.Item name={"img"} label="Product Image" rules={[{ required: true, message: "Img is required !" }]}>
                   
                            <Input  /> 
                    </Form.Item>
              
                <Form.Item name="price" label="Product Price" rules={[{ required: true, message: "Product price is required !" }]} >
                    <Input type="number" />
                </Form.Item>
                <Form.Item className='mt-2 font-bold' label="Category" name="category" rules={[{ required: true }]}>
                    <Select
                        showSearch

                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.title ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.title ?? '').toLowerCase().localeCompare((optionB?.title ?? '').toLowerCase())
                        }
                        options={categories}
                    />
                </Form.Item>
                <Button block type="primary" htmlType="submit" className="font-bold ">Create</Button>
            </Form>
        </Modal >
    )
}

export default Add;