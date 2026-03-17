import React, { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <button className={css.Button} onClick={loadMore}>
        Load more
      </button>
    );
  }
}
