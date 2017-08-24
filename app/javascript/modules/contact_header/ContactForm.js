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
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <div className="form-group">
              <label>
                Description:
                <textarea className='form-control'
                          name='description'
                          placeholder='Description (required)'
                          value={this.state.description}
                          onChange={this.handleChange}
                          required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <div className="form-group">
              <label>
                Name:
                <input className='form-control'
                       name='name'
                       type='text'
                       placeholder='Name'
                       value={this.state.name}
                       onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className='EmailInput'>
                Email:
                <input className='form-control'
                       name='email'
                       type='email'
                       placeholder='Email (required)'
                       value={this.state.value}
                       onChange={this.handleChange}
                       required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <button className="btn" type="submit">Send</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ContactForm