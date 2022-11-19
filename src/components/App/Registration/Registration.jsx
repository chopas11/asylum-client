import React from 'react';

const Registration = () => {
    return (
        <div className="container">

            <div className="header row">
                <div className="header-title col-md-2">
                    <h1><b>ASYLUM</b></h1>
                </div>
                <div className="form-div col-md-8">
                    <h1><b>Регистрация</b></h1>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="content row">
                <div className="sidebar col-md-2">
                </div>
                <div className="form-div col-md-8">
                    <form className="form" action="POST">
                        <input type="text" placeholder="Фамилия"/><br/>
                        <input type="text" placeholder="Имя"/><br/>
                        <input type="text" placeholder="Отчество"/><br/>
                        <input type="text" placeholder="Телефон"/><br/>
                        <input type="text" placeholder="Логин"/><br/>
                        <input type="text" placeholder="Пароль"/><br/>
                        <input type="text" placeholder="Подтверждение пароля"/><br/>
                        <button><a href="/login">Назад</a></button>
                        <button>Регистрация</button>


                    </form>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    );
};

export default Registration;