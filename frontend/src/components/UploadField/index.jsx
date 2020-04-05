import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import Loader from '../Loader';
import './styles.css';


class UploadField extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    state = {
        isLoading: false,
    };

    handleStartUploading = () => {
        this.setState({ isLoading: true })
    };

    handleEndUploading = (initialPhoto, improvedPhoto) => {
        this.setState({ isLoading: false });
        localStorage.setItem('initialPhoto', initialPhoto);
        localStorage.setItem('improvedPhoto', improvedPhoto);
        this.props.history.push("/compare/");

    };

    handleUploadBook = (e) => {
        e.preventDefault();
        this.handleStartUploading();
        const image = new FormData();
        if (this.uploadInput.files[0]) {
            image.append('file', this.uploadInput.files[0]);
        }
        fetch('/upload/', {
            body: image,
            method: 'POST',
        }).then((response) => response.json()).then(data => {
            this.handleEndUploading(data['initial_photo'], data['improved_photo'])
        });
    };

    render() {
        return (
            <div className="upload-image-container">
                {this.state.isLoading && <Loader/>}
                {!this.state.isLoading && <label className="upload-image-label" htmlFor="upload-image">
                    <div className="upload-image-title ">Загружайте и делитесь фотографиями героев</div>
                    <label type="button" className="upload-image-button" htmlFor="upload-image">Загрузить фото</label>
                </label>}
                {!this.state.isLoading && <input
                    id="upload-image"
                    ref={ (ref) => { this.uploadInput = ref; } }
                    type="file"
                    name="file"
                    accept=".jpg"
                    onChange={ this.handleUploadBook }
                />}
            </div>
        )
    }
}

export default withRouter(UploadField);