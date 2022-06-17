import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const init = {
  phone: "",
  name: "",
  email: "",
  password: "",
};

const loginInit = {
  email: "",
  password: "",
};
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [formSignup, setFormSignup] = useState(init);
  const [form, setForm] = useState(loginInit);
  const [showSidebar, setShowSidebar] = useState(false);
  const [changeCity, setChangecity] = useState(true);
  // const [login, setLogin] = useState(false);

  /**-----------------------
   * !      Signup onchange
   *------------------------**/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSignup({
      ...formSignup,
      [name]: value,
    });
  };
  /**-----------------------
   * !    Login onchange
   *------------------------**/
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  /**-----------------------
   * !     Handling Signup function
   *------------------------**/
  let newData = JSON.parse(localStorage.getItem("data"));
  if (!newData) {
    newData = [];
    localStorage.setItem("data", JSON.stringify(newData));
  }

  const handleSubmit = () => {
    if (
      formSignup.name === "" ||
      formSignup.phone === "" ||
      formSignup.email === "" ||
      formSignup.password === ""
    ) {
      alert("Please fill the credentials");
    } else {
      newData = [...newData, formSignup];
      console.log(newData);
      localStorage.setItem("form", JSON.stringify(formSignup));
      localStorage.setItem("data", JSON.stringify(newData));

      setFormSignup({
        phone: "",
        name: "",
        email: "",
        password: "",
      });
      setShow(false);
      handleVisible();
    }
  };

  /**-----------------------
   * !     handle Login from this
   *     function
   *------------------------**/

  const handleLoginSubmit = () => {
    if (form.email === "" || form.password === "") {
      alert("Please fill email and passoword");
    } else {
      let res = 0;
      let loginData = JSON.parse(localStorage.getItem("data"));
      loginData.forEach((elem) => {
        if (elem.email === form.email && elem.password === form.password) {
          res = 1;
          return res;
        }
      });
      if (res === 0) {
        alert("Please fill the valid credentials");
        setForm({
          email: "",
          password: "",
        });
      } else {
        alert("Login Successful");
        setForm({
          email: "",
          password: "",
        });
        setVisible(false);
      }
    }
  };

  const closeDone = () => setVisible(false);
  const handleVisible = () => setVisible(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   {
   
   
    

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
   }
      <div className={styles.mainNav}>
        {showSidebar && (
          <section
            id="sidebar"
            style={{
              width: "250px",
              zIndex: "9999",
              position: "absolute",
              left: "0",
              top: "0",
              backgroundColor: "white",
              height: "100%",
            }}
          >
            <ul
              className="sidebar_ul"
              style={{ listStyle: "none", paddingLeft: "0" }}
            >
              <li className="sidebar_li" style={{ paddingTop: "20px", backgroundColor: 'darkslategray', color: 'white' }}>
               Login
              </li>
              <li className="sidebar_li" style={{ paddingTop: "20px", backgroundColor: 'darkslategray', paddingBottom: '20px', color: 'white' }}>
                Sign Up
              </li>
              <li className="sidebar_li" style={{ marginTop: "20px" }}>
                
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Change City
    </button>
              </li>
              <li className="sidebar_li" style={{ marginTop: "20px" }}>
                <Link to="/loyalty">Supermiler Club</Link>
              </li>
              <li className="sidebar_li" style={{ marginTop: "20px" }}>
                <Link to="/policy">Zoomcar Fleet Vehicles Policies</Link>
              </li>
              <li className="sidebar_li" style={{ marginTop: "20px" }}>
                <Link to="/host-policy">Zoomcar Host Vehicles Policies</Link>
              </li>
              <li className="sidebar_li" style={{ marginTop: "20px" }}>
                <Link to="/faq">Help & Support</Link>
              </li>
            </ul>
            <span
              style={{
                position: "absolute",
                top: "10",
                left: "252px",
                top: "10px",
                cursor: "pointer",
              }}
              onClick={() => setShowSidebar(false)}
            >
              <img
                src="./NavImages/back.png"
                alt="back"
                style={{ width: "20px" }}
              />
            </span>
          </section>
        )}

        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img
              src="./NavImages/menu.png"
              alt="hamburger"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              onClick={() => setShowSidebar(true)}
            />
            <Link to='/'>
            <img
              src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png" height="40px"
              width="182px"              alt="Zoom_Car"
            />
            </Link>
            
          </div>
          <ul className={styles.nav_ul} style={{marginLeft: 'auto'}}>
          <li
              
              className={styles.item}
              id={styles.signup_btn}
              style={{marginRight: '40px'}}
            >
              <Link to="/host" style={{color: 'white', textDecoration: 'none'}}>BECOME A HOST</Link>
            </li>
            <li className={styles.item} style={{marginRight: '40px'}}>
             <Link to="/zoomcar-mobility-services" style={{color: 'white', textDecoration: 'none'}}> ZMS</Link>
              <div className={styles.details3}>
                <div className={styles.arrowmiddle3}></div>
                <div className={styles.zms_detail}>
                  <span className={styles.zmsLogo3}></span>
                  <p>
                    Connected technology offerings and shared mobility solutions
                    for businesses worldwide.
                  </p>
                  <Link to="/zoomcar-mobility-services"><button className={styles.subscr_btn}>KNOW MORE</button></Link>
                </div>
              </div>
            </li>

            <li
              onClick={handleShow}
              className={styles.item}
              id={styles.signup_btn}
              style={{marginRight: '40px'}}
            >
              SIGNUP
            </li>
            <li
              onClick={handleVisible}
              className={styles.item}
              id={styles.login_btn}
              style={{marginRight: '40px'}}
            >
              LOGIN
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <div className={styles.flexbox}>
          <div className={styles.signupForm}>
            <h1>Please Signup here</h1>
            <hr />
            <form>
              <input
                type="number"
                onChange={handleChange}
                value={formSignup.phone}
                name="phone"
                placeholder="Phone number"
              />
              <input
                type="text"
                onChange={handleChange}
                value={formSignup.name}
                name="name"
                placeholder="Enter name"
              />
              <input
                type="text"
                onChange={handleChange}
                value={formSignup.email}
                name="email"
                placeholder="Enter email"
              />
              <input
                type="password"
                onChange={handleChange}
                value={formSignup.password}
                name="password"
                placeholder="Enter password"
              />
            </form>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </Modal>

      <Modal
        centered
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={visible}
        onHide={closeDone}
      >
        <div className={styles.flexbox}>
          <div className={styles.signupForm}>           
            <form>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={handleLoginChange}
                value={form.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleLoginChange}
                value={form.password}
              />
            </form>
            <button onClick={handleLoginSubmit}>Login</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
