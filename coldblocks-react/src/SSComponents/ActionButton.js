import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import ButtonLoader from './ButtonLoader';
import { SVG } from '../SSComponents';

const ActionButton = ({
  isLink, text, svgName, svgSize, svgColor, isDisabled,
  isLoading, loaderType, loadingText, extraClass,
  ...otherProps
}) => {

  const classList = {
    'ss-button': true,
    'ss-button__primary': true,
    'disabled': isDisabled,
    [extraClass]: extraClass
  };

  //Handling SVG

  let svgProps = {
    name: svgName ? svgName : 'tick',
    size: svgSize,
    color: svgColor ? svgColor : 'white',
  };

  let innerContent = <><span className="pr--xl">{text}</span><SVG {...svgProps} extraClass={'ml--xl'}/></>;;

  //Handling Loader
  if (isLoading) {
    innerContent = <>{innerContent}<ButtonLoader type={loaderType} loadingText={loadingText}/></>;
  }

  return (
    isLink
      ? <Link className={classnames({ ...classList })} {...otherProps}>
          {innerContent}
      </Link>
      : <a className={classnames({ ...classList })} {...otherProps}>
          {innerContent}
      </a>
  );
};

export default ActionButton;