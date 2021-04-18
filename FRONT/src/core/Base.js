import React from 'react'
import Menu from './Menu';

const Base = ({
    title="My Title",
    description="My Description",
    className = "bg-dark text-white p-4",
    children
}) => (
        <div>
        <Menu/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center">
                    <h5>If you have any query then contact us</h5>
                    <h3 className="btn btn-warning btn-lg">+91 9328126138 or lukhidixit143@gmail.com</h3>
                </div>
                <div className="container">
                    <span className="text-muted">Very good <span className="text-white">Carry With U</span>SGP</span>
                </div>
            </footer>
        </div>
);

export default Base;