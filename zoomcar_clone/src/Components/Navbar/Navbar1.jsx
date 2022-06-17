import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import styles from './Nav.module.css'

const init = {
    phone: "",
    name: "",
    email: "",
    password: ""
}

const loginInit = {
    email: "",
    password: ""
}
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);

    const [formSignup, setFormSignup] = useState(init);
    const [form, setForm] = useState(loginInit);
    // const [login, setLogin] = useState(false);

    /**-----------------------
 * !      Signup onchange
 *------------------------**/

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormSignup({
            ...formSignup,
            [name]: value
        })
    }
    /**-----------------------
     * !    Login onchange
     *------------------------**/
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    /**-----------------------
     * !     Handling Signup function
     *------------------------**/
    let newData = JSON.parse(localStorage.getItem("data"))
    if (!newData) {
        newData = [];
        localStorage.setItem("data", JSON.stringify(newData))
    }

    const handleSubmit = () => {
        if (formSignup.name === "" || formSignup.phone === "" || formSignup.email === "" || formSignup.password === "") {
            alert("Please fill the credentials")
        }
        else {
            newData = [...newData, formSignup]
            console.log(newData);
            localStorage.setItem("form", JSON.stringify(formSignup))
            localStorage.setItem("data", JSON.stringify(newData))

            setFormSignup({
                phone: "",
                name: "",
                email: "",
                password: ""
            })
            setShow(false);
            handleVisible();
        }
    }

    /**-----------------------
 * !     handle Login from this 
 *     function
 *------------------------**/

    const handleLoginSubmit = () => {
        if (form.email === "" || form.password === "") {
            alert("Please fill the valid credentials")
        }
        else {
            let res = 0;
            let loginData = JSON.parse(localStorage.getItem("data"))
            loginData.forEach(elem => {
                if (elem.email === form.email && elem.password === form.password) {
                    res = 1;
                    return res
                }
            });
            if (res === 0) {
                alert("Please fill the valid credentials");
                setForm({
                    email: "",
                    password:""
                })
            } else {
                alert("Login Successful");
                setForm({
                    email: "",
                    password: ""
                })
                setVisible(false);
            }

        }
    }

    const closeDone = () => setVisible(false);
    const handleVisible = () => setVisible(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (<>
        <div className={styles.mainNav}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src="./NavImages/logo-f38397447048ccba047af6980364e92e.svg" alt="Zoom_Car" />
                </div>
                <ul className={styles.nav_ul}>
                    <li className={styles.item}>OFFERS</li>
                    <li className={styles.item_hov}>
                        SUBSCRIPTION
                        <div className={styles.details} id={styles.sub_det_item}>
                            <div className={styles.arrowmiddle}></div>
                            <div className={styles.subscr_detail}>
                                <span className={styles.subscrLogo1}>
                                    <img src="./NavImages/sub_logo.png" alt="" />
                                </span>
                                <p>Hassle-free way of getting your personal car for flexible long term duration. You also have an option
                                    to share your car with other Zoomcar customers &amp; save up to 70% of the monthly subscription fee.
                                </p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>AMIGO
                        <div className={styles.details2}>
                            <div className={styles.arrowmiddle2}></div>
                            <div className={styles.amigo_detail}>
                                {/* <span className={styles.amigo-logo2}></span> */}
                                <p>A unique Community Vehicle Pooling program that allows you to share your car with your community and
                                    friends while the car not in use and earn money.</p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}>ZMS
                        <div className={styles.details3}>
                            <div className={styles.arrowmiddle3}></div>
                            <div className={styles.zms_detail}>
                                <span className={styles.zmsLogo3}></span>
                                <p>Connected technology offerings and shared mobility solutions for businesses worldwide.</p>
                                <button className={styles.subscr_btn}>KNOW MORE</button>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item_mob_wid}>MOBILE APP
                        <div className={styles.mob_det}>
                            <div className={styles.arrowmiddle4}></div>
                            <div className={styles.details4}>
                                <a href="https://play.google.com/store/apps/details?id=com.zoomcar&referrer=utm_source%3Dhome%2520page%26utm_medium%3Dheader%2520links%26utm_content%3Dandroid%26utm_campaign%3Dinstalls"
                                    className={styles.mob_anc}>
                                    <div className={styles.mob1}>
                                        <img src="./NavImages/g_play_logo2.png" alt="google play" />Google Play
                                    </div>
                                </a>
                                <a href="https://apps.apple.com/us/app/zoomcar-self-drive-cars/id889910218?utm_campaign=installs&utm_content=iOS&utm_medium=header%20links&utm_source=home%20page"
                                    className={styles.mob_anc}>
                                    <div className={styles.mob2}>
                                        <img src="./NavImages/apple_log.png" alt="" />
                                        <p>Apple logo</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </li>
                    <li onClick={handleShow} className={styles.item} id={styles.signup_btn}>
                        SIGNUP
                    </li>
                    <li onClick={handleVisible} className={styles.item} id={styles.login_btn}>LOGIN</li>

                </ul>
            </nav>
        </div>
        <Modal centered size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={show} onHide={handleClose}>
            <div className={styles.flexbox}>
                <div>
                    <Carousel variant="dark" interval={1000} className={styles.mainCarousel}>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "200px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo-3.f243fadd09ecdd1d9cb70694fa1be058.png"
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <h3>Free Fuel</h3>
                                <h6 className={styles.h6}>The fuel on us for your trip. In case you re-fuel a zoomcar, we will refill your pockets and that's a promise.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "180px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo-1.1a6e5812962b16014f7311ed801fbf71.png"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Refer and Earn</h3>
                                <h6 className={styles.h6}>Refer or invite your friends to zoomcar and earn free rides, free z-ponts and more.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "200px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo_supermiler.7a597371bd16587f1d46a66dbff6b72e.svg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Supermiler Club</h3>
                                <h6 className={styles.h6}>Premium club which rewards you everytime you drive with us.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className={styles.signupForm}>
                    <div className={styles.photoDiv}>
                        <img src="https://www.zoomcar.com/build/img/zoom-logo-color.e3ec2e4b625f1a06ddb9a6ac765abb19.png" alt="logo" />
                    </div>
                    <form>
                        <input type="number" onChange={handleChange} value={formSignup.phone} name="phone" placeholder="Phone number" />
                        <input type="text" onChange={handleChange} value={formSignup.name} name="name" placeholder="Enter name" />
                        <input type="text" onChange={handleChange} value={formSignup.email} name="email" placeholder="Enter email" />
                        <input type="password" onChange={handleChange} value={formSignup.password} name="password" placeholder="Enter password" />
                    </form>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </Modal>



        <Modal centered size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={visible} onHide={closeDone}>
            <div className={styles.flexbox}>
                <div>
                    <Carousel variant="dark" interval={1000} className={styles.mainCarousel}>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "200px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo-3.f243fadd09ecdd1d9cb70694fa1be058.png"
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <h3>Free Fuel</h3>
                                <h6 className={styles.h6}>The fuel on us for your trip. In case you re-fuel a zoomcar, we will refill your pockets and that's a promise.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "180px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo-1.1a6e5812962b16014f7311ed801fbf71.png"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Refer and Earn</h3>
                                <h6 className={styles.h6}>Refer or invite your friends to zoomcar and earn free rides, free z-ponts and more.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{ 'marginBottom': "200px", "padding": "25px" }}
                                className="d-block w-100"
                                src="https://www.zoomcar.com/build/img/promo_supermiler.7a597371bd16587f1d46a66dbff6b72e.svg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Supermiler Club</h3>
                                <h6 className={styles.h6}>Premium club which rewards you everytime you drive with us.</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className={styles.signupForm}>
                    <div className={styles.photoDiv}>
                        <img src="https://www.zoomcar.com/build/img/zoom-logo-color.e3ec2e4b625f1a06ddb9a6ac765abb19.png" alt="logo" />
                    </div>
                    <form>
                        <input type="text" name="email" placeholder="Enter email" onChange={handleLoginChange} value={form.email} />
                        <input type="password" name="password" placeholder="Enter password" onChange={handleLoginChange} value={form.password} />
                    </form>
                    <button onClick={handleLoginSubmit}>Login</button>
                </div>
            </div>
        </Modal>
    </>)
}

export default Navbar
