import React from 'react';
import classnames from 'classnames';
import SVG from './SVG';

class Chip extends React.Component {
  render() {
    const { text, onDelete, isDisabled } = this.props;
    return (
    <div className={classnames({ 'ss-button ss-button__secondary ss-button__chip': true, 'disabled': isDisabled})}>
      {text}
      <span onClick={() => onDelete()}>
        <SVG name="delete" size={14} color="grey"/>
      </span>
    </div>
    );
  }
}

export default Chip;