import React from 'react';

const Doctor = () => {
    return (
        <div className="container">

            <div className="header row">
                <div className="header-title col-md-2">
                    <h1><b>ASYLUM</b></h1>
                </div>
                <div className="form-div col-md-8">
                    <h1><b>Личный кабинет врача</b></h1>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="content row">
                <div className="sidebar col-md-2">
                    <a className="sidebar-item" href="/priem">Прием</a>
                    <a className="sidebar-item" href="">Список приемов</a>
                    <a className="sidebar-item" href="">Начать прием</a>
                    <a className="sidebar-item" href="/login">Назад</a>
                </div>
                <div className="workspace col-md-8">
                    <span className="workspace-date">YYYY/MM/DD-HH:MM:SS</span>
                    <div className="workspace-patients">Список пациентов</div>
                    <span className="workspace-actor">Исполнитель</span>
                </div>
                <div className="col-md-2">
                    <form className="form" action="POST">
                        <input type="text" placeholder="Прием"/><br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Doctor;