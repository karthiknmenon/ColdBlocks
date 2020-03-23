import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import ButtonLoader from './ButtonLoader';
import { SVG } from '../SSComponents';

const noop = () => {};

const Button = ({
  type, size, isLink, text, svgName, svgPos, svgSize, svgColor, isDisabled, hasUnderline,
  isLoading, loaderType, loadingText, extraClass, inheritFontSize,
  onClick = noop,
  ...otherProps
}) => {

  const isPrimaryBtn = type === 'primary';
  const isSecondaryBtn = type === 'secondary';
  const isTextBtn = type === 'text';
  const isLinkBtn = type === 'link';
  const isIconBtn = type === 'icon';
  const isSmallBtn = size === 'small';

  const posRight = svgPos === 'right';

  const classList = {
    'ss-button': !isLinkBtn,
    'ss-button__primary': isPrimaryBtn,
    'ss-button__secondary': isSecondaryBtn,
    'ss-button__text': isTextBtn,
    'ss-button__link': isLinkBtn,
    'ss-button__icon-only': isIconBtn,
    'ss-button__mini': isSmallBtn,
    'ss-button__link--underline': hasUnderline,
    'disabled': isDisabled,
    [extraClass]: extraClass
  };

  //Handling SVG

  let svgProps = {
    name: svgName,
    size: svgSize,
    color: svgColor ? svgColor : isPrimaryBtn ? 'white' : 'grey',
  };

  let innerContent;

  if ( svgName ) {
    if (posRight) {
      innerContent = <>{text}<SVG {...svgProps} extraClass={text && (isSmallBtn ? 'ml--xs' : 'ml--sm')}/></>;
    } else {
      innerContent = <><SVG {...svgProps} extraClass={text && (isSmallBtn ? 'mr--xs' : 'mr--sm')}/>{text}</>;
    }
  } else {
    innerContent = <>{text}</>;
  }

  //Handling Loader
  if (isLoading) {
    innerContent = <>{innerContent}<ButtonLoader type={loaderType} loadingText={loadingText}/></>;
  }

  const handleClick = (e) => {
    if ( !isLoading ) {
      onClick(e);
    }
  };

  return (
    isLink
      ? <Link className={classnames({ ...classList })} style={{ fontSize: inheritFontSize ? 'inherit' : '' }} onClick={handleClick} {...otherProps}>
          {innerContent}
      </Link>
      : <a className={classnames({ ...classList })} style={{ fontSize: inheritFontSize ? 'inherit' : '' }} onClick={handleClick} {...otherProps}>
          {innerContent}
      </a>
  );
};

export default Button;