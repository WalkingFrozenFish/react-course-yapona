import React from 'react';
// Импорт изображения
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        // Использование фрагментов дает лучшую семантику и чистый код
        <React.Fragment>
            <header className={styles.header}>
                <h1>Япона Кухня</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={sushiImage} alt="Блюда японской кухни" />
            </div>
        </React.Fragment>
    )
}

export default Header