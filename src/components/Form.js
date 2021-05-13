import React from 'react';

class Form extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => console.log(this.props.handleFirstNameChange(event), event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;