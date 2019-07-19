import React from 'react';


import { connect } from 'react-redux';

import { actionChangeColor } from '../redux';


export class Bar extends React.Component {
    render() {
        var _color = this.props.colorProps.color || 'black';
        return (
            <div style={{width: '100%', height: 'auto'}}>
                <h2>CHANGE COLOR</h2>
                <button onClick={() => this.props.actionChangeColor({color: 'red'})}>Red</button>
                <button onClick={() => this.props.actionChangeColor({color: 'green'})}>Green</button>
                <button onClick={() => this.props.actionChangeColor({color: 'blue'})}>Blue</button>
                <div style={{width: '80%', height: '100px', background: _color, margin: '10px auto'}} ></div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    colorProps: state.colorReducer
  });
  
  const mapDispatchToProps = {
    actionChangeColor
  };
  
  const BarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bar);
  
  export default BarContainer;