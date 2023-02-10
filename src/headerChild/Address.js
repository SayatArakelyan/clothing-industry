import React from 'react';

function Address(props) {
    return (
        <div className="address">
            <p className=" address__geolocation"> Москва, Электрозаводская 24, офис 124.</p>
            <p className=" address__geolocation" >e-mail: <a href="">shveyka.pro@mail.ru</a> </p>

            <p className=" address__geolocation"><a href="">   схема проезда</a></p>

        </div>
    );
}

export default Address;