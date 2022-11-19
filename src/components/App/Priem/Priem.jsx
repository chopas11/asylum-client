import React from 'react';

const Priem = () => {
    return (
        <div className="container">

            <div className="header row">
                <div className="header-title col-md-2">
                    <h1><b>ASYLUM</b></h1>
                </div>
                <div className="form-div col-md-8">
                    <h1><b>Прием</b></h1>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="content row">
                <div className="sidebar col-md-2">
                    <a className="sidebar-item" href="">Карта пациента</a>
                    <a className="sidebar-item" href="">Записать</a>
                    <a className="sidebar-item" href="/doctor">Назад</a>
                </div>
                <div className="workspace col-md-8">
                    <span className="workspace-date">YYYY/MM/DD-HH:MM:SS</span>
                    <div className="workspace-patients">Пациент</div>
                    <span className="workspace-actor">Исполнитель</span>
                </div>
                <div className="col-md-2">
                    <form className="form" action="POST">
                        <input type="text" placeholder="Номер полиса"/><br/>
                        <input type="text" placeholder="Диагноз"/><br/>
                        <input type="text" placeholder="Отделение"/><br/>
                        <input type="text" placeholder="Рецепт"/><br/>
                        <input type="text" placeholder="Пол"/><br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Priem;