import styles from './layout.module.css'
import {NavLink, Outlet} from "react-router";

export function Layout () {
    return (
        <>
            <header>
                <div className='container'>
                    <div className={styles.header}>
                        <div>
                            <nav>
                                <ul className={styles.list}>
                                    <li>
                                        <NavLink className={( {isActive} ) =>
                                            isActive ? styles.active : styles.link
                                        } to='/products'>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={( {isActive} ) =>
                                            isActive ? styles.active : styles.link
                                        } to='/create-product'>
                                            Создать товар
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}