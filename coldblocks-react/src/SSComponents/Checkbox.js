import React from 'react';
import classnames from 'classnames';


class Checkbox extends React.Component {
  render() {
    const {
      name, isDisabled, size, isChecked, extraClass, ...rest
    } = this.props;

    if (!name){
      console.error('SSComponents->Checkbox {name} prop is requried.');
      return null;
    }
    
    return (
        <div
          className={classnames({
            'checkmeout-checkbox':true,
            'checkmeout-checkbox-lg': size === 'large',
            'checkmeout-checkbox-sm': size === 'small',
            [extraClass]: extraClass,
          })}
          onClick={e => e.stopPropagation()}> 
            <input type="checkbox" name={name} id={name} checked={isChecked} disabled={isDisabled} {...rest} />
            <label className="checkmeout-checkbox-style" htmlFor={name}></label>
        </div>
    );
  }
}

export default Checkbox;