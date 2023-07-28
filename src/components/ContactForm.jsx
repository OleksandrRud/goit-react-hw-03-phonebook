import { Component } from 'react';
import css from '../components/ContactForm.module.css';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleImput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleImput}
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleImput}
          />
          <button
            className={css.button}
            type="submit"
            onClick={() => this.props.onFind(this.state.name)}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onFind: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
