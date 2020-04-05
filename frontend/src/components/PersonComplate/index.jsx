import React, { useState } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import debounce from 'lodash.debounce'
import MenuItem from 'material-ui/MenuItem';
import Loader from '../Loader';
import Button from '../Button';


export default ({ready}) => {
    const [dataSource, setDataSource] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [heroData, setHeroData] = useState(null);
    const handleUpdateInput = debounce((event) => {
        console.log(event)
        fetch('/search_hero/?query=' + event, {
            method: 'GET',
        }).then((response) => response.json()).then(data => {
            console.log(data)
            const source = [];
            for (const id in data) {
                const item = data[id];
                source.push(
                    {
                        text: item.name,
                        value: renderItem(item),
                        id
                    }
                )
            }

            setDataSource(source);
        });
    }, 500);
    const onNewRequest = (event) => {
        setIsLoading(true);

        fetch('/get_hero/?id=' + event.id, {
            method: 'GET',
        }).then((response) => response.json()).then(data => {
            setHeroData(data);
            setIsLoading(false);
            const name = data['Фамилия'] + " " + data['Имя'] + " " + data['Отчество'];
            ready(name);
        });
    }

    if(isLoading) {
        return <Loader/>
    }

    if(heroData) {
        return (<div style={{textAlign: 'center'}}>
            <strong>{heroData['Фамилия']} {heroData['Имя']} {heroData['Отчество']}</strong><span>, {heroData['Воинское звание']}</span>
            <div>Место рождения: {heroData['Дата рождения/Возраст']} </div>
            <div>Выбыл: {heroData['Место выбытия']}</div>
            <div>Причина выбытия: {heroData['Причина выбытия']}</div>
            <div>Дата выбытия: {heroData['Дата выбытия']} </div>

        </div>)
    }

    return (
        <AutoComplete
            hintText="Фамилия Имя Отчество"
            dataSource={dataSource}
            onUpdateInput={handleUpdateInput}
            filter={AutoComplete.noFilter}
            onNewRequest={onNewRequest}
            openOnFocus={true}
            hintStyle={{ color: 'gray' }}
            underlineFocusStyle={{ border: '2px solid #8d856d' }}
            inputStyle={{ color: 'white' }}
            menuStyle={{ width: '400px', overflowX: 'auto' }}
        />
    );
}

function renderItem({ name, place, date_birth, date_out }) {
    const dateBirthElement = date_birth ? <span>Место рождения: {date_birth}</span> : null;
    const placeElemnt = place ? <span>Выбыл: {place}</span> : null;
    const dateOutElement = date_out ? <span>Дата выбытия: {date_out}</span> : null;

    return (
        <MenuItem
            style={{ width: "400px" }}
        >
            <strong>{name}</strong>
            
            <span style={{color: 'gray', size: '8px', display: 'block', paddingTop: '1px', marginTop: '1px'}}>
                {dateBirthElement} {placeElemnt} {dateOutElement}</span>
        </MenuItem>
    );
}