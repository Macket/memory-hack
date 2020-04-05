import React from 'react';
import CircularProgress from "material-ui/CircularProgress";


export default class Loader extends React.Component {
   render() {
       return (
           <CircularProgress
               color="white"
               size={80}
               thickness={7}
           />
       )
   }
}