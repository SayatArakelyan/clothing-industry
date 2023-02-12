import React from 'react';

function Address(props) {
    return (
        <div className="address">
            <p className=" address__geolocation">  Краснодар, ул. Агрохимическая 109.</p>
            <p className=" address__geolocation" >e-mail: <a href="src/components/headerChild/Address">textile_kras2022@mail.ru</a> </p>

            <p className=" address__geolocation"><a href="src/components/headerChild/Address">   схема проезда</a></p>

        </div>
    );
}

export default Address;