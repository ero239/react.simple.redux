import React from 'react';

import { connect } from 'react-redux';

import { actionActivateGeod, actionCloseGeod, actionChangeColorText } from './redux';

import Bar from './containers/Bar';



// App.js
export class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: '',
      selected: ''
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeOfForm = this.handleChangeOfForm.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }

  handleSubmitForm = () => {
/*     this.props.actionActivateGeod({title: this.state.value}); */
  }

  handleChangeOfForm = (event) => {
    this.props.actionActivateGeod({title: event.target.value});
  }

  handleChangeRadio = event => {
    switch (event.target.value) {
      case 'radio1':
        this.props.actionChangeColorText({ color: 'red'}) ;
      case 'radio2':
        this.props.actionChangeColorText({ color: 'green'}) ;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <h1 style={{color: this.props.colorProps.color || 'black'}} >{this.props.geodProps.title || 'Hello World!'}</h1>
        <form onSubmit={this.handleSubmitForm}>
          <input type={'text'} onChange={this.handleChangeOfForm} /><br />
          <label>
            <input type={'radio'} checked={this.props.colorProps.color === 'red'} value="radio1" onChange={this.handleChangeRadio}/><i>Red</i><br />
            <input type={'radio'} checked={this.props.colorProps.color === 'green'} value="radio1" onChange={this.handleChangeRadio} /><i>Green</i><br />
          </label>
          <input type={'submit'}  value='Submit'/>
        </form>
        {this.props.geodProps.title ? (
          <button onClick={this.props.actionCloseGeod}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              this.props.actionActivateGeod({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}
        <Bar />
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geodProps: state.geodReducer,
  colorProps: state.colorReducer,
});

const mapDispatchToProps = {
  actionActivateGeod,
  actionCloseGeod,
  actionChangeColorText,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
