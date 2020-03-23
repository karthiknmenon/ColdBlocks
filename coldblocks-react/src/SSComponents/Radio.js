import React from 'react';
import classnames from 'classnames';
import Label from './Label';
class Radio extends React.Component {
  render() {
    const { stacked, children } = this.props;
    return ( 
      <div className={classnames({ 'fx-row': !stacked, 'fx-column': stacked})}>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              extraClass: stacked ? 'mb--lg' : 'mr--xl' })   
         })}
      </div>
    );
  }
}

const Item = ({
    name, label, isDisabled, size,
    isChecked, extraClass, ...rest
  }) => {
  
    if (!name){
    console.error('SSComponents->Radio {name} prop is requried.');
    return null;
    }
    
    return ( 
    <div className={classnames({ 'flex_row flex_row--row-mob': true, [extraClass]: extraClass })}>
        <label 
        className={classnames({
            'checkmeout-radio':true,
            'checkmeout-radio-lg': size === 'large',
            'checkmeout-radio-sm': size === 'small',
            'mr--sm': true,
        })}>
        <input type="radio" name={name} id={name} checked={isChecked ? isChecked : null} disabled={isDisabled} {...rest}/>
        <span className="checkmeout-radio-style"></span>
        </label> 
        <Label label={label} isToggle/>
    </div>
    );
  }

Radio.Item = Item;

export default Radio;