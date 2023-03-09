
import "./Style.css";
import { useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import Add from "./Add.js";
import Edit from "./Edit";
const Categories = ({categories}) => {
  


    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const showModal = () => {
        setIsAddModalOpen(true);
      };
      const handleCancel = () => {
        setIsAddModalOpen(false);
      };
      const showModalEdit = () => {
        setIsEditModalOpen(true);
      };
      const handleCancelEdit = () => {
        setIsEditModalOpen(false);
      };
    return (
        <>


            <ul className=" gap-5 flex md:flex-col text-lg">

               {
                 categories.map((item  ) =>{
                    return(
                        <div key={item._id}>

                        <li className="categroy-item">{item.title}</li>
                        </div>
                       
                    )
                 })
               }
                
              


                <li   onClick={showModal} className="categroy-item !bg-purple-800 hover:opacity-80" >
                    <PlusOutlined />
                </li>
                <li onClick={showModalEdit}   className="categroy-item !bg-yellow-800 hover:opacity-80" >
                    <EditOutlined />
                </li>
                    <Add  isAddModalOpen={isAddModalOpen}  handleCancel={handleCancel} />

                    <Edit isEditModalOpen={isEditModalOpen} handleCancelEdit={handleCancelEdit} categories={categories} /> 
            </ul>
        </>
    )
}

export default Categories;

