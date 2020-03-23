import React from 'react';
import classnames from 'classnames';
import Label from './Label';

const Input = React.forwardRef(({
  label, value, inputInfo, error, isDisabled, 
  maxLength, noPadding, noMargin, size,
  ...otherProps
}, ref) => {
  const currentLength = value ? value.length : 0;
  const isMini = size === 'small';
  return (
    <div className={classnames({
      'flex_column ss-form--input-group': true,
      'ss-form--input-group__no-padding': noPadding,
      'ss-form--input-group__no-margin': noMargin
      })}>
      {(label || maxLength) && 
        <Label label={label} inputInfo={inputInfo} maxLength={maxLength} currentLength={currentLength} isMini={isMini}/>
      }
      <input
        disabled={isDisabled}
        value={value}
        ref={ref}
        maxLength={maxLength}
        className={classnames({
          'ss-form--input': true,
          'ss-form--input--error': error,
          'ss-form--input--disabled': isDisabled,
          'ss-form--input--mini': isMini  
        })}
        {...otherProps}
      />
      {error && <span className="ss-form--error">{error}</span>}
    </div>
  );
});

export default Input;
