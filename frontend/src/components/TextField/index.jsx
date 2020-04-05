import React from 'react';
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";


export default class Button extends React.Component {
   static propTypes = {
       hintText: PropTypes.string.isRequired,
       fullWidth: PropTypes.bool,
   };

   static defaultProps = {
       fullWidth: true,
   };

   render() {
       return (
           <TextField
               hintText={ this.props.hintText }
               fullWidth={ this.props.fullWidth }
               hintStyle={ { color: 'gray' } }
               underlineFocusStyle={ { border: '2px solid #8d856d' } }
               inputStyle={ { color: 'white' } }
               // inputStyle={ { backgroundColor: 'red', color: 'red' } }
               // underlineStyle={ { backgroundColor: 'red', color: 'red' } }
           />
       )
   }
}