import React from 'react';
import './biscuit.css';
import img1 from '../../../img/biscuit.jpg';

const biscuit = () => {
    return (
        <div className="container">
            <div className="row vertical_content_manage mt-5">
                <div className="col-md-6">
                    <div className="mt-3">
                        <h3 className="about_header_main text-center">Biscuit</h3>
                        <h4 className="about_heading text-center text-capitalize font-weight-bold mt-4">Allow the world to get to know you better!</h4>
                        <p className="text-muted text-center mt-3">AI supported application to shoot short videos and click pictures. Videos can be shared with pictures on the platform.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img_about">
                        <img src={img1} alt="biscuit" className="mx-5 b-img" />
                    </div>
                </div>
            </div>

            <div className="row mt-3 pb-5">
                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fas fa-pencil-alt"></i>
                            </div>
                            <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                            <p className="edu_desc mt-3 mb-0 text-muted">You can even add music of your wish in background of your pictures or your photos.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fab fa-angellist"></i>
                            </div>
                            <h5 className="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                            <p className="edu_desc mb-0 mt-3 text-muted">This application will help in making of short videos and also clicking pictures using filters.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fas fa-paper-plane"></i>
                            </div>
                            <h5 className="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                            <p className="edu_desc mb-0 mt-3 text-muted">Biscuit application is a short video uploading app to share it with the public.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default biscuit;
