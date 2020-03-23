import React from 'react';
import classnames from 'classnames';

class Label extends React.Component {
  render() {
    const {
      label, inputInfo, maxLength, currentLength, extraOption, isToggle, isMini
    } = this.props;

    return (
      <div className={classnames({ "flex_row flex_row--row-mob mb--xs ss-form--input__label": true, 'ss-form--input__label-mini': isMini })}
        style={{ 
          width: isToggle ? 'auto' : null,
          margin: isToggle ? 0 : null,
        }}>
          {label && <label>{label}</label>}
          {inputInfo && 
          <a className="ss-form--input__info ml--xs" tabIndex="-1" spiketip-pos={isToggle ? 'top' : 'right'} spiketip-length={isToggle ? 'lg' : null} spiketip-title={inputInfo} href="#!">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" fill="#BDBDBD"/>
                  <path d="M7.701 9.23598L8.502 8.96598C8.376 8.87598 8.304 8.70498 8.304 8.56098C8.304 7.75998 9.906 7.65198 9.906 6.31998C9.906 5.50998 9.213 4.90698 8.079 4.90698C7.269 4.90698 6.576 5.23098 6.117 5.79798L6.729 6.47298C7.026 6.08598 7.422 5.84298 7.98 5.84298C8.556 5.84298 8.835 6.13998 8.835 6.49098C8.835 7.25598 7.386 7.36398 7.386 8.46198C7.386 8.75898 7.485 9.02898 7.701 9.23598ZM8.025 11.099C8.367 11.099 8.655 10.802 8.655 10.46C8.655 10.127 8.367 9.83898 8.025 9.83898C7.683 9.83898 7.395 10.127 7.395 10.46C7.395 10.802 7.683 11.099 8.025 11.099Z" fill="#BDBDBD"/>
              </svg>
          </a>
          }
          {maxLength && <span className={classnames({ 'ss-form--input__option' : true, 'ss-form--input__option-mini': isMini })}>{currentLength}/{maxLength}</span>}
          {extraOption && <span className={classnames({ 'ss-form--input__option' : true, 'ss-form--input__option-mini': isMini })}>{extraOption}</span>} 
      </div>
    );
  }
}

export default Label;
