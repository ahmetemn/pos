import React from "react";
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, BarChartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Input, Badge } from 'antd';
import {Link} from "react-router-dom"
import "./Header.css"
const Header = () => {

    return (
        <>

            <div className="border-b mb-6">
                <header className="header py-5 px-6 flex justify-between  items-center gap-10">
                    <div className="logo">
                        <Link to="/">
                            <h2 className="text-2xl font-bold md:text-5xl">
                                LOGO
                            </h2>
                        </Link>
                    </div>
                    <div className="header-search flex-1 mt-1 flex  justify-center">

                        <Input size="large" placeholder="Search Product..." prefix={<SearchOutlined />} className="rounded-full max-w-[800px] " />

                    </div>
                    <div className="menu-links  flex items-center gap-8  md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4">
                        <Link to="/" className="menu-link  flex flex-col">
                            <HomeOutlined className="md:text-2xl  text-xl" />
                            <span className="md:text-xs text-sm">
                                Home
                            </span>

                        </Link>
                        <Badge count={1} className="md:flex hidden" offset={[0,8]}>
                            <Link to="box" className="menu-link  flex flex-col">



                                <ShoppingCartOutlined className="md:text-2xl text-xl" />
                                <span className="md:text-xs text-sm">
                                    Box
                                </span>



                            </Link>
                        </Badge>
                        <Link to="invoice" className="menu-link  flex flex-col">
                            <CopyOutlined className="md:text-2xl text-sm" />
                            <span className="md:text-xs text-sm">
                                Invoice
                            </span>

                        </Link>
                        <Link to="customers" className="menu-link  flex flex-col">
                            <UserOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-sm">
                                Customers
                            </span>

                        </Link>
                        <Link to="statistics" className="menu-link  flex flex-col">
                            <BarChartOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-sm">
                                Statistics
                            </span>

                        </Link>
                        <Link to="logout" className="menu-link  flex flex-col">
                            <LogoutOutlined className="md:text-2xl text-xl" />
                            <span className="md:text-xs text-sm">
                                Logout
                            </span>

                        </Link>


                    </div>
                    <Badge count={1} className="badge md:hidden flex" offset={[0,8]} >
                            <Link to="box" className="menu-link  flex flex-col">



                                <ShoppingCartOutlined className="text-xl" />
                                <span className="md:text-xs text-sm">
                                    Box
                                </span>



                            </Link>
                        </Badge>
                </header>
            </div>
        </>
    )
}

export default Header;


