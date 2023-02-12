import React from 'react';
import "./reasonToWork.css"
import clothing01 from "../../assets/img/clothing1.jpg";


function ReasonsToWorkWithUs() {

    const img = {
        id: 1,
        name: "clothing",
        image: clothing01
    }

    return (
        <section className="reason__to__work">
            <div className="container">
                <div className="row">
                    <div className="img__block">
                        <img src={img.image} alt={img.name} className="img__content"/>
                    </div>
                    <div className="content__block">
                        <h2 className="title">У ВАС ЕСТЬ ЦЕЛЫХ 5 ПРИЧИН НАЧАТЬ СОТРУДНИЧЕСТВО С НАМИ</h2>
                        <ol>
                            <li className="description">Мы ГАРАНТИРУЕМ КАЧЕСТВО в сочетании с низкими ценами;</li>
                            <li className="description">Предлагаем привлекательные условия сотрудничества , включая
                                ГИБКУЮ СИСТЕМУ СКИДОК;
                            </li>
                            <li className="description">Возможность пошива одежды по ВАШЕМУ ДИЗАЙНУ при наличии эскизов
                                и рабочих лекал – это
                                замечательная возможность для тех, кто запускает собственную линию модной одежды;
                            </li>
                            <li className="description">Максимально быстрые сроки обработки заказа СЭКОНОМЯТ ВАШЕ
                                ВРЕМЯ;
                            </li>
                            <li className="description">ПРОФЕССИОНАЛЬНЫЙ ШТАТ ответственных работников уделяет особое
                                внимание контролю качества.
                            </li>
                        </ol>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default ReasonsToWorkWithUs;