import React from 'react';

const Lawyer = () => {
    return (
        <div className="container">

            <div className="header row">
                <div className="header-title col-md-2">
                    <h1><b>ASYLUM</b></h1>
                </div>
                <div className="form-div col-md-8">
                    <h1><b>Личный кабинет юриста</b></h1>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="content row">
                <div className="sidebar col-md-2">
                    <a className="sidebar-item" href="/priem">Заключить Договор</a>
                    <a className="sidebar-item" href="">Договоры врачей</a>
                    <a className="sidebar-item" href="">Договоры пациентов</a>
                    <a className="sidebar-item" href="/login">Назад</a>
                </div>
                <div className="workspace col-md-8">
                    <span className="workspace-date">YYYY/MM/DD-HH:MM:SS</span>
                    <div className="workspace-patients">Список договоров</div>
                    <span className="workspace-actor">Исполнитель</span>
                </div>
                <div className="col-md-2">
                    <form className="form" action="POST">
                        <input type="text" placeholder="Номер договора"/><br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Lawyer;