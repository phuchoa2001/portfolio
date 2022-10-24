import React from 'react';
import Styles from './index.module.css';
function Item({ name, description, image, category, github, url, goverment, handleSearch }) {
    const handleRedirect = (href) => {
        window.location = href;
    }
    return (
        <div className={Styles.item}>
            <div className={Styles.wrapper}>
                <div className={Styles.Boximage}>
                    <img src={image.url} alt="item" className={Styles.img} />
                </div>
                <div className={Styles.content}>
                    <div className={Styles.wrapperInfo}>
                        <h3 className={Styles.name}>{name}</h3>
                        <p className={Styles.description}>{description}</p>
                        <div className={Styles.listtags}>
                            {category.map((tag, index) =>
                                <p
                                    className={Styles.tagItem}
                                    key={index}
                                    onClick={() =>
                                        handleSearch(tag.name)}
                                >{tag.name}</p>
                            )}
                        </div>
                    </div>
                    <div className={Styles.boxBtn}>
                        <button className={Styles.btn} onClick={() => handleRedirect(github)}>Lấy mã nguồn</button>
                        <button className={Styles.btn} onClick={() => handleRedirect(goverment ? `https://xoanen.surge.sh${url}` : url)}>Đến trang website</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;