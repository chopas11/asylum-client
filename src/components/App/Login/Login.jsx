import React from 'react';

const Login = () => {
    return (
        <div className="container">

            <div className="header row">
                <div className="header-title col-md-2">
                    <h1><b>ASYLUM</b></h1>
                </div>
                <div className="form-div col-md-8">
                    <h1><b>Авторизация</b></h1>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="content row">
                <div className="sidebar col-md-2"></div>
                <div className="form-div col-md-8">
                    <form className="form" action="POST">
                        <input type="text" placeholder="Логин"/><br/>
                        <input type="text" placeholder="Пароль"/><br/>
                        <button><a href="/doctor">Войти</a></button>
                        <button><a href="/registration">Регистрация</a></button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Login;