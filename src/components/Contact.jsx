import css from '../components/Contact.module.css';
import PropTypes from 'prop-types';

function Contact({ contacts, onDelete }) {
  return (
    <ul className={css.item}>
      {contacts.map(contact => (
        <li className={css.list} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button className={css.button} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contact;
