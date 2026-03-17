import { Searchform } from 'components/SearchForm/Searchform';
import { Component } from 'react';
import css from './Searchbar.module.css';
export class Searchbar extends Component {
  render() {
    return (
      <div>
        <header className={css.Searchbar}>
          <Searchform onSubmit={this.props.onSubmit} />
        </header>
      </div>
    );
  }
}
