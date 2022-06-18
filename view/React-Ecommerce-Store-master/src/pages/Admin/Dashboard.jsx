import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'

const Dashboard = () => {
    return (
        <div>
            <section style={{ backgroundColor: "#ecf0f1", minHeight: "90vh" }} className="container-fluid">
                <div className='row'>
                    <div className='col-sm-2 d-flex py-5' style={{ backgroundColor: "#FFF", minHeight: "90vh" }}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    Customer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-10'>
                        <ProductList />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
