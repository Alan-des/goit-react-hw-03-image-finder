import React, { Component } from 'react';
import { ImageModal } from 'components/Modal/Modal';
import css from './App.module.css';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { fetchImages } from 'components/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  async componentDidMount (){
    this.setState({  isLoading: true, });
    try {
      const data = await fetchImages();
      this.setState({ images: data });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  SearchImages = async query => {
    this.setState({ searchQuery: query, isLoading: true, page: 1, images: [] });
    try {
      const data = await fetchImages(query, 1);
      this.setState({ images: data });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(this.state.searchQuery, nextPage);

      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        page: nextPage,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const query = form.elements.text.value;

    this.SearchImages(query);

    form.reset();
  };

  toggleModal = (url = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: url,
    }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.toggleModal} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button loadMore={this.loadMore} />}
        <ImageModal
          isOpen={this.state.showModal}
          onClose={this.toggleModal}
          largeImageURL={this.state.largeImageURL}
        />
      </div>
    );
  }
}
