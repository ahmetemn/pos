import { Button, Form, Input, message, Modal, Table } from "antd";
import React, { useState } from "react";
const Edit = ({ handleCancelEdit, isEditModalOpen, categories }) => {

    const [form] = Form.useForm()
    const [editingRow, setEditingRow] = useState({})
    

    const onFinish = (values) => {

        try {
            fetch(`http://localhost:8800/api/category/${ editingRow._id}`, {
                method:"PUT",
                body: JSON.stringify({ ...values, categoryId: editingRow._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
            message.success("Category title updated")
            form.resetFields()
        } catch (error) {

        }
    }
 
    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
            render: (_, record) => {
                if (record._id === editingRow._id) {
                    return (
                        <Form.Item style={{ minWidth: 100 }} className="mb-0" name="title">
                            <Input className="w-100" size="50" initialvalue={record.title} ></Input>
                        </Form.Item>
                    )
                }
                else {
                    return (
                        <p > {record.title}</p>
                    )
                }
            }
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className=" flex   gap-1">
                        <Button onClick={() => setEditingRow(record)} type="primary" >Edit</Button>
                        <Button htmlType="submit" type="default" className="color-grey-800">Save</Button>
                        <Button danger type="primary" >Delete</Button>
                    </div>
                )
            }
        }
    ];
    return (
        <>
            <Modal title="Category Operations" open={isEditModalOpen} onCancel={handleCancelEdit} footer={false}>
                <Form form ={form} onFinish={onFinish}>
                    <Table dataSource={categories} bordered columns={columns} rowKey={"_id"} />
                </Form>
            </Modal>
        </>
    )
}

export default Edit; 