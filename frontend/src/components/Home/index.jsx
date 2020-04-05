import React from 'react';
import UploadField from "../UploadField";
import './styles.css';


export default class Home extends React.Component {
   render() {
       return (
           <div className="home">
               <div className="logo-container">
                   <a href="/" className="logo" />
               </div>
               <UploadField
                   onStartUploading={ this.handleStartUploading }
                   onEndUploading={ this.handleEndUploading }
               />
           </div>
       )
   }
}
