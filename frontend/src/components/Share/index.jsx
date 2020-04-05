import React, {useEffect, useRef} from 'react';
import "./styles.css"

export default (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const title = "Это ветеран " + name + ". Я загрузил фотографию ветерана на портал \"Дорога памяти\"."
    const img = location.protocol + '//'+ location.host + urlParams.get('img');
    const vkElement = useRef()

    const okLink = 'https://connect.ok.ru/offer?url=https://' + location.host + '&title='+title+'&imageUrl='+img;

    useEffect(() => {
        if(!VK) return;
        const vkButton = VK.Share.button({
            title: title,
            image: img,
            noparse: true,
        },{type: "button_nocount", text: "Расскажите о ветеране ВКонтакте"});
        vkElement.current.innerHTML = vkButton;
    }, []);
    return (
        <div className="share">
            <h1 className="title">Поделитесь результатом в социальных сетях</h1>
            <div className="container">
                <div className="vk">
                    <div className="vk-share-button"><span ref={vkElement}></span></div>
                    <div className="vk-post">
                        <div className="vk-header">
                            <span className="vk-header-name">Ваше имя</span>
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
                    <div className="ok-share-button">
                        <a href={okLink} target="_blank">Расскажите о ветеране в Однокласниках</a>
                    </div>
                    <div className="ok-post">
                        <div className="ok-header">
                            <span className="ok-header-name">Ваше имя</span>
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