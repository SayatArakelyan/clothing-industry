import React from 'react';
import {NavLink} from "react-router-dom";


function Nav() {
    const activeLink = "nav-list__link nav-list__link--active"
    const link = "nav-list__link"
    return (
        <nav className="nav">
            <ul className="nav__list">

                <li className="nav-list__item">
                    <NavLink
                        to="/" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Главная
                    </NavLink>

                </li>

                <li className="nav-list__item">
                    <NavLink
                        to="services" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Услуги
                    </NavLink>

                </li>

                <li className="nav-list__item">
                    <NavLink
                        to="prices" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Цены
                    </NavLink>

                </li>

                <li className="nav-list__item">
                    <NavLink
                        to="gallery" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Галерея
                    </NavLink>

                </li>

                <li className="nav-list__item">
                    <NavLink
                        to="vacancy" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Вакансии
                    </NavLink>

                </li>

                <li className="nav-list__item">
                    <NavLink
                        to="contacts" className={({isActive}) => (
                        isActive ? activeLink : link

                    )}

                    >
                        Контакты
                    </NavLink>

                </li>


            </ul>
        </nav>
    );
}

export default Nav;