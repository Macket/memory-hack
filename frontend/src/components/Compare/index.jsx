import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import TextField from '../TextField';
import './styles.css';


export default class Compare extends React.Component {
    state = {
        chosenPhoto: undefined,
        isCompared: false,
    };

    handleChoosePhoto(chosenPhoto) {
        this.setState({ chosenPhoto });
        setTimeout(() => this.setState({ isCompared: true }), 700);
    }

    render() {
        const { chosenPhoto, isCompared } = this.state;


        if (isCompared) {
            return (
                <div className="compare">
                    <h1 className="title">Введите фамилию, имя и отчество человека на фото</h1>
                    <div style={{color: 'white'}} className="compare-container">
                        <div className="compare-image-container">
                            <img
                                className="compare-image"
                                src={localStorage.getItem(chosenPhoto)}
                            />
                            <TextField hintText="Фамилия Имя Отчество"/>
                        </div>
                    </div>
                </div>
            )
        }


        return (
            <div className="compare">
                <h1 className="title">Фотография была автоматически улучшена нейронной сетью. Правда, получилось лучше?</h1>
                <div
                    className="compare-container"
                >
                    <div
                        style={ chosenPhoto === 'improvedPhoto' ? { visibility: 'hidden' } : {} }
                        // className="compare-image-container"
                        className={ chosenPhoto === 'initialPhoto' ? "compare-image-container move-left" : "compare-image-container" }
                    >
                        <img
                            className="compare-image"
                            // className={ chosenPhoto === 'initialPhoto' ? "compare-image move-left" : "compare-image" }
                            src={ localStorage.getItem('initialPhoto') }
                        />
                        {!chosenPhoto && <Button
                            label="Нет, было лучше"
                            onClick={ () => this.handleChoosePhoto('initialPhoto') }
                        />}
                    </div>
                    <div
                        style={ chosenPhoto === 'initialPhoto' ? { visibility: 'hidden' } : {} }
                        // className="compare-image-container"
                        className={ chosenPhoto === 'improvedPhoto' ? "compare-image-container move-right" : "compare-image-container" }
                    >
                        <img
                            // className={ chosenPhoto === 'improvedPhoto' ? "compare-image move-right" : "compare-image" }
                            className="compare-image"
                            src={ localStorage.getItem('improvedPhoto') }
                        />
                        {!chosenPhoto && <Button
                            label="Да, так лучше"
                            onClick={ () => this.handleChoosePhoto('improvedPhoto') }
                        />}
                    </div>
                </div>
            </div>
        )
    }
}
