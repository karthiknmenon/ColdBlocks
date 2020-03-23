import React from 'react';
import classnames from 'classnames';

class ButtonLoader extends React.Component {
  render() {
    const { type, loadingText } = this.props;
    const spinner = type === 'spinner';
    const bar = type === 'bar';
    return (
      <div 
        className={
          classnames(
            {
              'flex_row flex_row--row-mob': true,
              'flex_row--justify-center': true,
              'ss-button--loader': true,
              'ss-button--loader__spinner': spinner,
              'ss-button--loader__bar': bar,
              'ss-button--loader__dots': !spinner && !bar,
            })}>
        {bar 
          ? <span>{loadingText}</span>
          : spinner ? <span></span> : <>
          <span></span>
          <span></span>
          <span></span>
        </>
        }
      </div>
    );
  }
}

export default ButtonLoader;