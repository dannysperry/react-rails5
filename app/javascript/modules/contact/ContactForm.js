import React, { createClass, Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var params = {
      email: this.state.email,
      name: this.state.name,
      description: this.state.description
    }
    axios.post('/contact', params)
      .then(function (response) {
        // console.log(response)
      })
      .catch(function (error) {
        // console.log(error)
      });

  }

  render() {
    return (
      <form className='ContactForm' onSubmit={this.handleSubmit}>
        <label className='EmailInput'>
          Email:
          <input name='email'
                 type='email'
                 placeholder='Email (required)'
                 value={this.state.value}
                 onChange={this.handleChange}
                 required
          />
        </label>
        <label>
          Name:
          <input name='name'
                 type='text'
                 placeholder='Name'
                 value={this.state.name}
                 onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <textarea name='description'
                    placeholder='Description (required)'
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
          />
        </label>
        <button type='submit'>Send</button>
      </form>
    )
  }
}

export default ContactForm