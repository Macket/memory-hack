import React, {useEffect, useRef} from 'react';
import "./styles.css"

export default (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const img = '//'+ location.host + urlParams.get('img');
    const vkElement = useRef()

    useEffect(() => {
        const vkButton = VK.Share.button({
            title: "Это ветеран Иван Иванов. Я загрузил фотографию ветерана на портал \"Дорога памяти\".",
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
                            <p>Это ветеран Иван Иванов. Я загрузил фотографию ветерана на портал "Дорога памяти". </p>
                        </div>
                        <img src="/static/img/vk-buttons.png" className="vk-footer" />
                    </div>
                </div>
                <div className="ok">
                    test
                </div>
            </div>
        </div>
    )
}