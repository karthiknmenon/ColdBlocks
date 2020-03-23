import React from 'react';
import classnames from 'classnames';
import Label from './Label';


class ToggleSwitch extends React.Component {
  render() {
    const {
      label, name, disabled, inputInfo, extraClass, ...otherProps
    } = this.props;
    if (label) {
      return (
        <div className={classnames({'grid grid-nogutter fx-grow-1': true, [extraClass]: extraClass})}>
          {label && 
            <Label label={label} inputInfo={inputInfo} isToggle/>
          }
          <div className="col fx-row fx-jc--end fx--fw">
            <label className="checkmeout-switch">
                <input {...otherProps} type="checkbox" name={name} disabled={disabled}/> 
                <span className="checkmeout-switch-style"></span>
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <label className={classnames({'checkmeout-switch': true, [extraClass]: extraClass})}>
            <input {...otherProps} type="checkbox" name={name} disabled={disabled}/> 
            <span className="checkmeout-switch-style"></span>
        </label>
      );
    }
  }
}

export default ToggleSwitch;
