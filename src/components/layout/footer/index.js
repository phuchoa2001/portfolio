import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
function Footer(props) {
    const handleMessage = () => {
        alert("Đã gữi Message");
    }
    return (
        <div className={Styles.Footer}>
            <div className={clsx(Styles.wrapper, "row gx-0")}>
                <div className={clsx("col col-12 sm-12 md-6 lg-6 xl-6 xxl-6", Styles.item)}>
                    <h3 className={Styles.HeadingMessage}>Nhắn tin cho tôi</h3>
                    <div className={Styles.boxInput}>
                        <input type="text" className={Styles.input} />
                        <div className={Styles.boxIcon} onClick={handleMessage}>
                            <i className={clsx("fa-solid fa-arrow-right", Styles.Icon)}></i>
                        </div>
                    </div>
                </div>
                <div className={clsx("col col-12 sm-12 md-6 lg-6 xl-6 xxl-6", Styles.item)}>
                    <h3 className={Styles.HeadingMessage}>Mạng xã hội của tôi</h3>
                    <div className={Styles.listSocial}>
                        <a href="https://www.facebook.com/profile.php?id=100075642372471">
                            <div className={Styles.boxIconSocial}>
                                <i className={clsx("fa-brands fa-facebook-f", Styles.iconSocial)}></i>
                            </div>
                        </a>
                        <a href="https://github.com/phuchoa2001">
                            <div className={Styles.boxIconSocial}>
                                <i className={clsx("fa-brands fa-github", Styles.iconSocial)}></i>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/dangphuchoa2001/">
                            <div className={Styles.boxIconSocial}>
                                <i className={clsx("fa-brands fa-instagram", Styles.iconSocial)}></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;