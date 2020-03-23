import React from 'react';
import classnames from 'classnames';
import SVG from './SVG';

const noop = () => {};

class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    const {
      text,
      trigger,
      buttonType,
      CustomDropdownText,
      children,
      onClick = noop,
      onBlur = noop,
      onMouseOver = noop,
      onMouseOut = noop,
      svgName,
      svgSize,
      svgColor,
      svgPos,
      extraClass,
      hasActionBtn,
      closeOnSelect,
      openDirection,
      ...otherProps
    } = this.props;
    const {
      open,
    } = this.state;
    const hoverTrigger = trigger === 'hover';
    const TextButton = buttonType === 'text';
    const LinkButton = buttonType === 'link';
    const IconButton = buttonType === 'icon';
    const PrimaryButton = !TextButton && !LinkButton && !IconButton;

    const iconLeft = svgPos === 'left';

    //Opening

    const openToTop = openDirection === 'up';

    //SVG Props

    const svgProps = {
      name: svgName ? svgName : 'down',
      size: svgSize,
      color: svgColor || ((TextButton || LinkButton || IconButton)  ? 'black' : 'white'),
      extraClass: IconButton ? '' : iconLeft ? 'mr--sm' : 'ml--sm'
    };

    return (
    <a
      href="javascript:void(0);"
      onClick={e => {
        e.stopPropagation();
        this.setState(prev => ({ open: !prev.open }));
        onClick();
      }}
      ref={this.buttonRef}
      className={classnames({
        'ss-button--dropdown': true,
        'ss-button--dropdown--open': open,
        'ss-button--dropdown--open-up': openToTop,
        'ss-button--dropdown__action-btn--wrapper': hasActionBtn,
        [extraClass]: extraClass,
      })}
      onMouseOver={() => {
        if ( hoverTrigger && !open ) {
          this.setState({ open: true });
        }
        onMouseOver();
      }}
      onMouseOut={() => {
        if ( hoverTrigger && open ) {
          this.setState({ open: false });
        }
        onMouseOut();
      }}
      onBlur={() => {
        if ( open ) {
          this.setState({ open: false });
        }
        onBlur();
      }}
      {...otherProps}>
      {CustomDropdownText
        ? <CustomDropdownText/>
        : <span className={classnames({
          'ss-button': !LinkButton,
          'ss-button__primary': PrimaryButton,
          'ss-button__text': TextButton,
          'ss-button__link ss-button__link--underline': LinkButton,
          'ss-button__icon-only': IconButton,
        })}>
        {iconLeft ? <><SVG {...svgProps}/>{text}</> : <>{text} <SVG {...svgProps}/></>}
      </span>
      }
      <ul
        style={{ marginTop: !PrimaryButton ? 8 : '' }}
        onClick={(ev) => {
          ev.stopPropagation();
          if ( closeOnSelect && open ) {
            this.setState({ open: false });
          }
        }}
      >
        {children}
      </ul>
    </a>
    );
  }
}

export default Dropdown;