import React, { Component } from 'react';
import Contact from './contacts/Contact';
import shortid from 'shortid';
import Filter from './filter/Filter';

export default class Phonebook extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    name: '',
    filter: '',
    number: '',
    filteredArr: [],
  };

  componentDidMount() {
    // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...JSON.parse(localStorage.getItem('contacts')),
        ],
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      console.log(prevState.contacts.length, this.state.contacts.length);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAdd = e => {
    this.setState({ name: e.target.value });
  };

  handleAddNumber = e => {
    this.setState({ number: e.target.value });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
    this.filterArr();
  };

  handleDelete = id => {
    let contacts = this.state.contacts.filter(obj => {
      return obj.id !== id;
    });
    this.setState({
      contacts: contacts,
    });
    console.log(id);
  };

  filterArr = () => {
    const obj = this.state.contacts.filter(item =>
      item.name.includes(this.state.filter),
    );
    this.setState({ filteredArr: obj });
  };

  addContact = e => {
    if (this.state.contacts.find(elem => elem.name === this.state.name)) {
      alert('this name already exist');
    } else {
      console.log(...this.state.contacts);
      console.log(this.state);
      const obj = {
        id: shortid(),
        name: this.state.name,
        number: this.state.number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, obj],
        name: '',
        number: '',
      }));
    }
  };

  render() {
    let contacts = [];
    this.state.filter !== ''
      ? (contacts = this.state.filteredArr)
      : (contacts = this.state.contacts);
    // console.log("contacts", contacts);
    return (
      <div>
        <h2>Phonebook</h2>
        <h3>Name</h3>
        <input
          type="text"
          onChange={this.handleAdd}
          value={this.state.name}
          placeholder="Name"
        />
        <h3>Number</h3>
        <input
          type="text"
          onChange={this.handleAddNumber}
          value={this.state.number}
          placeholder="Number"
        />
        <button type="button" onClick={this.addContact}>
          Add contact
        </button>
        <div>
          <h2>Contacts</h2>
          <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
          <ul>
            {contacts.map(item => (
              <Contact
                handleDelete={this.handleDelete}
                name={item.name}
                number={item.number}
                key={shortid()}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
