import React from 'react';
import classnames from 'classnames';
import Label from './Label';

class Textarea extends React.Component {
  render() {
    const {
      label, value, isDisabled, inputInfo, error, maxLength,
      noPadding, noMargin, children, extraClass, ...otherProps
    } = this.props;

    const currentLength = value ? value.length : 0;
    return (
      <div className={classnames({
        'flex_column ss-form--input-group': true,
        'ss-form--input-group__no-padding': noPadding,
        'ss-form--input-group__no-margin': noMargin
      })}>
        {(label || maxLength) && 
          <Label label={label} inputInfo={inputInfo} maxLength={maxLength} currentLength={currentLength} extraOption={children} />
        } 
        <textarea
          value={value}
          disabled={isDisabled}
          maxLength={maxLength}
          className={classnames({ 
            'ss-form--input ss-form--input--textarea': true,
            'ss-form--input--error': error,
            'ss-form--input--disabled': isDisabled,
          }, [extraClass] ) }
          data-gramm_editor="false"
          {...otherProps}> 
        </textarea>
        {error && <span className="ss-form--error">{error}</span>}
      </div>
    );
  }
}

export default Textarea;