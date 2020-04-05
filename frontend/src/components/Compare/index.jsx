import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import PersonComplate from '../PersonComplate';
import './styles.css';


export default class Compare extends React.Component {
    state = {
        chosenPhoto: undefined,
        isCompared: false,
        isReady: false,
    };

    handleChoosePhoto(chosenPhoto) {
        this.setState({ chosenPhoto });
        setTimeout(() => this.setState({ isCompared: true }), 700);
    }

    handleReady = (id) => {
        this.setState({ isReady: id });
    }

    toReady = () => {
        const id = this.state.isReady;
        const img = localStorage.getItem(this.state.chosenPhoto);
        this.props.history.push(`/share/?img=${img}&id=${id}`);
    }

    render() {
        const { chosenPhoto, isCompared } = this.state;


        if (isCompared) {
            return (
                <div className="compare">
                    <h1 className="title">Введите фамилию, имя и отчество человека на фото</h1>
                    <div style={{color: 'white'}} className="compare-container">
                        <div className="compare-image-container">
                            <PersonComplate ready={this.handleReady}/>
                            <img
                                className="compare-image"
                                src={localStorage.getItem(chosenPhoto)}
                            />
                            {this.state.isReady &&  <div style={{paddingTop: '10px'}}><Button label="Готово" onClick={this.toReady}/></div>}
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
                    style={{paddingTop: '45px'}}
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
