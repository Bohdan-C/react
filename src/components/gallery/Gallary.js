import React, { Component } from 'react';
import Seachbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import services from '../services/services';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class Gallary extends Component {
  state = {
    data: [],
    value: '',
    search: '',
    page: 1,
    show: false,
    url: '',
  };
  componentDidMount() {
    services.getData().then(data => {
      this.setState({
        data: data.data.hits,
      });
    });
    window.addEventListener('keyup', this.hideModal);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      services.getData(this.state.search).then(data => {
        this.setState({
          data: data.data.hits,
        });
      });
    }
    if (prevState.page !== this.state.page) {
      services.getData(this.state.search, this.state.page).then(data => {
        this.setState({
          data: [...prevState.data, ...data.data.hits],
        });
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.hideModal);
  }

  onHandleLoad = () => {
    this.setState({ page: this.state.page + 1 });
  };

  showModal = url => {
    this.setState({ show: true, url });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onHandleGetValue = event => {
    const info = event.target.value;
    this.setState({ value: info });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.setState({ search: this.state.value });
  };
  render() {
    return (
      <div>
        <Seachbar
          onHandleGetValue={this.onHandleGetValue}
          onHandleSubmit={this.onHandleSubmit}
        />
        <ImageGallery showModal={this.showModal} data={this.state.data} />
        {this.state.data.length !== 0 ? (
          <Button onHandleLoad={this.onHandleLoad} />
        ) : (
          ''
        )}
        <Modal
          show={this.state.show}
          hideModal={this.hideModal}
          url={this.state.url}
        />
      </div>
    );
  }
}

export default Gallary;
