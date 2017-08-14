import React, { Component } from 'react'
import { render } from 'react-dom'

export class RequiredFormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    const target = e.target
    const targetValue = target.value

    this.setState({
      value: targetValue
    });
  }

  render() {
    var title = this.props.name
    var inputElement
    var placeholder = `${this.props.placeholder} (required)`
    if (this.props.textarea === true) {
      inputElement = <input 
              name={this.props.target}
              type={this.props.type}
              placeholder={placeholder}
              value={this.state.value}
              onChange={this.handleChange}
              required
      />
    } else {
      inputElement = <textarea
              name={this.props.target}
              placeholder={placeholder}
              value={this.state.value}
              onChange={this.handleChange}
              required
      />
    }
    <label className={`${title}Input`}>
      `${title}`:
      { inputElement }
    </label>
  }
}
export class EmailInput extends Component {

  render() {
    return(
      <RequiredFormElement
        name={this.props.target}
        type='email'
        placeholder='Email'
        value={this.state.value}
      />
    )
  }
}

export class NameInput extends Component {

  render() {
    return(
      <label>
        Name:
        <input name={this.props.target}
               type='text'
               placeholder='Name'
               value={this.state.value}
               onChange={this.handleChange}
        />
      </label>
    )
  }
}

export class DescriptionTextArea extends Component {

  render() {
    return(
      <RequiredFormElement
        name={this.props.target}
        placeholder='Description'
        value={this.state.value}
      />
    )
  }
}
