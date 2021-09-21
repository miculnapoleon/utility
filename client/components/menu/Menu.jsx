import React, {useState} from 'react';
import styles from './menu.module.scss';

const list = [
    {
        id: 1,
        name: "Flights"
    },
]

const Menu = ({menuState}) => {
    const [open, setMenu] = useState(true);
    const handleClick = () => {
        setMenu(!open);
    }

    const menuList = () => (
        list.map(el => <div key={el.id}>{el.name}</div>)
    )

    return (
        <>
        <div className={`${styles.mainContainer} ${open?styles.open: styles.closed}`}>
            <div className={styles.button} onClick={handleClick}>
            {open ? 
                <img src={'/left-arrow.svg'}/>:
                <img src={'/right-arrow.svg'}/>
            }
            </div>
            <div className={`${styles.list} ${styles.listContainer}`}>
                {menuList()}
            </div>
        </div>
        </>
    )
}

export default Menu;