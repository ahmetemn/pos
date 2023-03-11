
import { Button, Form, Input, message, Table, Modal, Select } from "antd";
import React, { useState, useEffect } from "react";

const Edit = () => {
    const [form] = Form.useForm()
    const [product, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [isEditModalOpen, setIsModelopen] = useState(false)
    const [editing, setEditing] = useState({})

    const onFinish = (values) => {
          
        try {
             
            fetch(`http://localhost:8800/api/product/${editing._id}`, {
                method: "PUT",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
            message.success("Product Updated")
            form.resetFields()
    
        } catch (error) {
            
            console.log(error)
        }
        
    }
    
    const deleteProduct = (id) => {

        try {
            fetch(`http://localhost:8800/api/product/${id}`, {
                method:"DELETE",
                body: JSON.stringify ({productId:id}),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            })
            message.success("Deleted Category")
            form.resetFields()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = fetch("http://localhost:8800/api/product")
                const data = await (await res).json();
                setProducts(data)

            } catch (error) {
                console.log(error)
            }
        }

        getProducts();
    }, [product])

    useEffect(() => {

        const getCategories = async () => {
            try {
                const res = fetch("http://localhost:8800/api/category")
                const data = await (await res).json();

                data && setCategories(data.map((item) => {
                    return { ...item, value: item.title }
                }))

            } catch (error) {
                console.log(error)
            }
        }

        getCategories();
    }, [categories])


    const handleCancel = () => {
        setIsModelopen(false);
    };

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            render: (_, record) => {
                return <p>{record.title}</p>
            }

        },

        {
            title: 'Product Image',
            dataIndex: "img",
            width: "8%",
            render: (_, record) => {
                return <img alt="" className="w-full h-20 object-cover" src={record.img}></img>
            }
        },
        {
            title: 'Product Price',
            dataIndex: "price"
        },
        {
            title: 'Product Category',
            dataIndex: "category"
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                return (
                    <div className=" flex   gap-1">
                        <Button  onClick={() => {
                       
                            setIsModelopen(true)
                             
                            setEditing(record)
                             
                          
                           
                        }} type="primary" >Edit</Button>
                        <Button danger type="primary"  onClick={() =>{
                             deleteProduct (record._id)
                        }} >Delete</Button>
                    </div>
                )
            }
        }
    ];


    return (
        <>

            <Table scroll={{
                x: 100,
                y: 600,
            }} dataSource={product} bordered columns={columns} rowKey={"_id"} />

            <Modal title="Add New Product" open={isEditModalOpen} onCancel={handleCancel} footer={false}>
                <Form className="font-bold " layout="vertical" onFinish={onFinish} initialValues={editing} form={form}>
                    <Form.Item name="title" label="Product Name" rules={[{ required: true, message: "Product name is required !" }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name={"img"} label="Product Image" rules={[{ required: true, message: "Img is required !" }]}>

                        <Input />
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
                    <Button   block type="primary" htmlType="submit" className="font-bold ">Update Product</Button>
                </Form>
            </Modal >

        </>
    )
}

export default Edit; 