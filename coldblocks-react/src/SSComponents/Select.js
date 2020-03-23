import React from 'react';
import SelectInput from 'react-select';
import classnames from 'classnames';
import Label from './Label';

class Select extends React.Component {
  render() {
    const {
      label, inputInfo, error, placeholder, children,
      hide, noPadding, noMargin, size,...otherProps
    } = this.props;

    const isMini = size === 'small';
    return (
      <div className={classnames({
        'flex_column ss-form--input-group': true,
        'ss-form--input-group__no-padding': noPadding,
        'ss-form--input-group__no-margin': noMargin
        })}>
        {(label || children) &&
          <Label label={label} inputInfo={inputInfo} extraOption={children} isMini={isMini} />
        }
        {
          !!!hide && (
            <SelectInput
              className={classnames({
                'ss-react-select-container': true,
                'ss-react-select-container--error': error,
                'ss-react-select-container--mini': isMini,
              })}
              classNamePrefix="ss-react-select"
              placeholder={placeholder || ''}
              {...otherProps} />
          )
        }
        {error && <span className="ss-form--error">{error}</span>}
      </div>
    );
  }
}

export default Select;
