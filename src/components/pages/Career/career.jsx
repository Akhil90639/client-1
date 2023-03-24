import React, { useState } from "react";
import "./career.css";
import image from "../../../img/Group (1).png";
import {
  editUserEmail,
  removeUserQueryFormResponceStatus,
  UserQueryForm,
} from "../../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Career = () => {
  const { userQueryFormResponceStatus, userEmail } = useSelector(
    (store) => store.userContact
  );
  // console.log(removeUserQueryFormResponceStatus)
  const [userQueryForm, setuserQueryForm] = useState({
    firstname: null,
    lastname: null,
    mobile: null,
    email: userEmail || null,
    query: null,
  });
  const [wait, setwait] = useState(false);

  const [file, setfile] = useState("");


  const dispatch = useDispatch();
  let navigation = useNavigate();

  const PHONE_REGEXP = /^[6789]\d{9}$/;

  if (userQueryFormResponceStatus && wait) {
    setTimeout(() => {
      dispatch(removeUserQueryFormResponceStatus());
    }, 2000);
    setwait(false);
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (!PHONE_REGEXP.test(+userQueryForm.mobile))
      return alert("Please enter a valid phone number");
    dispatch(UserQueryForm({ ...userQueryForm, file }));
    dispatch(editUserEmail(userQueryForm.email));
    e.preventDefault();
    setwait(!wait);
    // setuserQueryForm({})

    setuserQueryForm({
      firstname: null,
      lastname: null,
      mobile: null,
      email: null,
      query: null,
    });

    e.target.fname.value = "";
    e.target.lname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.textarea.value = "";
    e.target.files.value = "";
  };


  const isValidFileUploaded=(file)=>{
    const validExtensions = ['png','jpeg','jpg','pdf']
    const fileExtension = file.type.split('/')[1]
    return validExtensions.includes(fileExtension)
  }
  
  const fileChange = (e) => {
    if (e.target.files[0].length < 1) {
      return;
    }
    const file = e.target.files[0];
    if (isValidFileUploaded(file)) {
      const data = e.target.files[0];
      const imageurlupload = new FileReader();
      imageurlupload.readAsDataURL(data);
      imageurlupload.onloadend = () => setfile(imageurlupload.result);
    } else {
      alert("Only jpg/jpeg/png and pdf files are allowed!");
      return;
    }
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 align-items-center">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-10 align-items-center align-self-center">
                <h1 className="ca-heading mt-3 text-capitalize text-center">
                  Careers
                </h1>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-sm-10 align-items-center align-self-center text-start">
                <p className="ca-para">
                  Qurinom solutions is an organization which takes pride in its
                  workforce. At every step, we have been built by individuals
                  who have gone beyond the limits of personal goals and leaped
                  across boundaries. A career here represents a life long
                  opportunities to explore innovation and great work experience.
                  It is the freedom provided to every individual to learn, grow
                  and create a career path that makes us an organization of
                  opportunities beyond boundaries. Outpacing the boundaries of
                  region, age, gender, ability and routine we want you to be a
                  part of this experience.
                </p>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-sm-10 align-items-center align-self-center">
                  <p className="text-capitalize car-para">
                    "We embrace different thoughts and commitment to learning"
                  </p>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-sm-10 align-items-center align-self-center">
                  <p className="ca-ben mt-3">Benefits :-</p>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col-sm-10 align-items-center align-self-center">
                  <p className="ca-para">
                    A career at qurinom represents a life of experience with the
                    comfort of work and a drive for passion along with working
                    with finest technologies with the like minded and diverse
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-items-center align-self-center mt-5">
            <div className="contact-form">
              <form onSubmit={handleForm}>
                <div className="row" style={{ lineHeight: "36px" }}>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputFirstName" className="mt-3">
                        First Name
                      </label>
                      <input
                        value={userQueryForm.firstname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            firstname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputFirstName"
                        required
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputLastName" className="mt-3">
                        Last Name
                      </label>
                      <input
                        value={userQueryForm.lastname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            lastname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputLastName"
                        required
                        name="lname"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Email Address
                    </label>
                    <input
                      value={userQueryForm.email}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      className="form-control c-form-control mt-2"
                      id="inputEmail"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Phone Number
                    </label>
                    <input
                      value={userQueryForm.mobile}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          mobile: e.target.value,
                        });
                      }}
                      type="number"
                      className="form-control c-form-control mt-2"
                      id="inputNumber"
                      required
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputMessage" className="mt-3 text-capitalize">
                      Tell us how can we help you!
                    </label>
                    <textarea
                      value={userQueryForm.query}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          query: e.target.value,
                        });
                      }}
                      className="form-control c-form-control mt-2"
                      style={{ height: "112px" }}
                      placeholder="Type here..."
                      id="inputMessage"
                      rows="1"
                      required
                      name="textarea"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputMessage" className="mt-3">
                      Upload File
                    </label>
                    <input
                      onChange={(e) => fileChange(e)}
                      type={"file"}
                      className="form-control c-form-control mt-2"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "7% 56%",
                        paddingTop: "53px",
                        paddingLeft: "16px",
                      }}
                      required
                      name="files"
                    />
                  </div>
                  <div className="col-sm-6 offset-3 form-group mt-5 px-5">
                    <input
                      type="submit"
                      className="btn btn-primary px-5 py-3"
                      value="Submit"
                    />
                  </div>
                  {userQueryFormResponceStatus &&
                    (userQueryFormResponceStatus === "success" ? (
                      <Alert style={{ marginTop: "2%" }} severity="success">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ) : (
                      <Alert style={{ marginTop: "2%" }} severity="error">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
