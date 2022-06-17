import React from 'react'
import styles from './Footer.module.css'
const FooterTop = () => {
    return (
        <div className={styles.main}>
            <div className={styles.footer}>
                <div className={styles.Button}>
                    <button id="1" ><a className={styles.link} href="https://www.zoomcar.com/howitworks"><img
                        src="./img/Question logo.svg" alt="How Zoomcar works" width="50px" height="50px" />
                    </a>
                        <p className={styles.p1}>How zoomcar works?</p>
                    </button>
                    <button id="2"><a className={styles.link} href="https://www.zoomcar.com/policy#member"><img
                        src="./img/policies.svg" alt="How Zoomcar Policies" width="50px" height="50px" />
                    </a>
                        <p className={styles.p2}>Policies</p>
                    </button>
                    <button id="3"><a className={styles.link} href="https://www.zoomcar.com/faq"><img
                        src="./img/help-support.svg" alt="Help Support" width="50px" height="50px" />
                    </a>
                        <p className={styles.p3}>Help Support</p>
                    </button>
                    <button id="4"><a className={styles.link} href="https://www.zoomcar.com/safety"><img
                        src="./img/safety.svg" alt="Zoom Safety" width="50px" height="50px" />
                    </a>
                        <p className={styles.p4}>Zoom in Safety</p>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default FooterTop
