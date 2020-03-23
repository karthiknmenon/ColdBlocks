import React from 'react';
import ButtonLoader from './ButtonLoader';
import classnames from 'classnames';

class SpinnerLoader extends React.Component {
  render() {
    const { size, extraClass } = this.props;
    let isSmall, isMedium, isLarge, isMega;
    if (size > 100) {
      isMega = true;
    } else if (size > 64) {
      isLarge = true;
    } else if (size > 32) {
      isMedium = true;
    } else {
      isSmall = true;
    }

    return (
      <div className={classnames({
        'ss-action-loader--spinner': true,
        'ss-action-loader--spinner__small': isSmall,
        'ss-action-loader--spinner__medium': isMedium,
        'ss-action-loader--spinner__large': isLarge,
        'ss-action-loader--spinner__mega': isMega,
        [extraClass]: extraClass
      })}
      style={{ width: size, height: size, margin: 'auto' }}>
        <ButtonLoader type="spinner"/>
      </div>
    );
  }
}

export default SpinnerLoader;