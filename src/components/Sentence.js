import { Component } from 'react';

class Sentence extends Component {
  render() {
    const { words } = this.props;
    const { length } = words;

    return words
      .map((item, index) => {
        if (index === 0) {
          return `${item.charAt(0).toUpperCase() + item.substr(1)} `;
        } else if (index === length - 1) {
          return `${item}. `;
        }
        return `${item} `;
      })
      .join(' ');
  }
}

export default Sentence;
