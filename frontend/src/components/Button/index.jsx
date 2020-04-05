import React from 'react';
import PropTypes from "prop-types";
import MaterialButton from "material-ui/RaisedButton";


export default class Button extends React.Component {
   static propTypes = {
       label: PropTypes.string.isRequired,
       onClick: PropTypes.func.isRequired,
       color: PropTypes.string,
   };

   static defaultProps = {
       color: '#8d856d',
   };

   render() {
       return (
           <MaterialButton
               label={ this.props.label }
               primary
               onClick={ this.props.onClick }
               buttonStyle={ { backgroundColor: this.props.color, lineHeight: '70px', height: '70px' , width: '300px', borderRadius: '8px' } }
               style={ { lineHeight: '70px', height: '70px' , width: '300px', borderRadius: '8px' } }
               labelStyle={ { fontSize: '16px', fontFamily: "font-family: Ubuntu, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;" } }
           />
       )
   }
}