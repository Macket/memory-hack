import React, {useEffect, useRef} from 'react';
import Button from '../Button';
import "./styles.css"

export default (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const title = "Это ветеран " + name + ". Фотография улучшена с помощью сервиса \"Дорога памяти\".";
    const img = location.protocol + '//'+ location.host + urlParams.get('img');

    const okLink = 'https://connect.ok.ru/offer?url=https://partisans-memoryhack.herokuapp.com/&title='+ title + '&imageUrl='+img;
    const vkLink = 'https://vk.com/share.php?url=https://partisans-memoryhack.herokuapp.com/&title=' + title + '&image=' + img;

    return (
        <div className="share">
            <h1 className="title">Поделитесь фотографией в социальных сетях</h1>
            <div className="container">
                <div className="vk">

                    <div style={ { textAlign: 'center', margin: '20px 0' } }>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ vkLink }
                        >
                            <Button color="#4a76a8" label="Расскажите ВКонтакте" onClick={ () => {} } />
                        </a>
                    </div>
                    <div className="vk-post">
                        <div className="vk-header">
                            <span className="vk-header-name">Василий Тёркин</span>
                            <span className="vk-header-date">05 апр 2020</span>
                        </div>
                        <div className="vk-content">
                            <img className="vk-hero-photo" src={img}/>
                            <p>{title}</p>
                        </div>
                        <img src="/static/img/vk-buttons.png" className="vk-footer" />
                    </div>
                </div>
                <div className="ok">
                    <div style={ { textAlign: 'center', margin: '20px 0' } }>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ okLink }
                        >
                            <Button color="#EE8208" label="Расскажите в Одноклассниках" onClick={ () => {} } />
                        </a>
                    </div>
                    <div className="ok-post">
                        <div className="ok-header">
                            <span className="ok-header-name">Василий Тёркин</span>
                            <span className="ok-header-date">05 апр 2020</span>
                        </div>
                        <div className="ok-content">
                            <img className="ok-hero-photo" src={img}/>
                            <p>{title}</p>
                        </div>
                        <img src="/static/img/ok-buttons.png" className="ok-footer" />
                    </div>
                </div>
            </div>
        </div>
    )
}
