import React from 'react';

function Nav(props) {
    return (
        <nav className="nav">
            <ul className="nav__block">
                <li className="nav__list"><a href="#" className="nav__link">Главная</a></li>
                <li className="nav__list"><a href="#" className="nav__link">Услуги </a></li>
                <li className="nav__list"><a href="#" className="nav__link">Цены</a></li>
                <li className="nav__list"><a href="#" className="nav__link">Галерея</a></li>
                <li className="nav__list"><a href="#" className="nav__link">Вакансии</a></li>
                <li className="nav__list"><a href="#" className="nav__link">Контакты</a></li>

            </ul>
        </nav>
    );
}

export default Nav;