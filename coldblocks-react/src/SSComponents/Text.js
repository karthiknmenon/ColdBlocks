import React from 'react';
import classnames from 'classnames';

class Text extends React.Component {
  render() {
    const {
      size, family, weight, color, lineHeight, opacity, textCenter, isUppercase, children, extraClass, ...otherProps
    } = this.props;


    //Size
    const isJumbo = size === 'jumbo';
    const isH1 = size === 'h1';
    const isH2 = size === 'h2';
    const isH3 = size === 'h3';
    const isH4 = size === 'h4';
    const isMicro = size === 'micro';

    const classList = {
      'ss-text': true,

      //Size
      'ss-text__size--jumbo': isJumbo,
      'ss-text__size--h1': isH1,
      'ss-text__size--h2': isH2,
      'ss-text__size--h3': isH3,
      'ss-text__size--h4': isH4,
      'ss-text__size--micro': isMicro,

      //Weight
      'ss-text__weight--bold': weight === 'bold',
      'ss-text__weight--semibold': weight === 'semibold',
      'ss-text__weight--regular': weight === 'regular',
      'ss-text__weight--normal': weight === 'normal',
      'ss-text__weight--thin': weight === 'thin',

      //Color
      'ss-text__color--black': color === 'black',
      'ss-text__color--grey': color === 'grey',
      'ss-text__color--white': color === 'white',
      'ss-text__color--purple': color === 'purple',

      //Family

      'ss-text__family--serif': family === 'serif',
      'ss-text__family--sans': family === 'sans',

      //Line Height
      'ss-text__line-height--normal': lineHeight === 'normal',
      'ss-text__line-height--small': lineHeight === 'small',
      'ss-text__line-height--medium': lineHeight === 'medium',
      'ss-text__line-height--large': lineHeight === 'large',

      //Alignment

      'ss-text__align--center': textCenter,

      //Case

      'ss-text__transform--uppercase': isUppercase,

      [extraClass]: extraClass,
    };

    return (
      <>
        {isJumbo &&
        <h1
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </h1>
        }
        {isH1 &&
        <h1
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </h1>
        }
        {isH2 &&
        <h2
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </h2>
        }
        {isH3 &&
        <h3
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </h3>
        }
        {isH4 &&
        <h4
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </h4>
        }
        {isMicro &&
        <p
          className={classnames({ ...classList })}
          style={{ opacity }}
          {...otherProps}>
            {children}
        </p>
        }
      </>
    );
  }
}

export default Text;