import React from 'react';
import classnames from 'classnames';
import { Text, ActionButton, Button, ButtonLoader } from '../SSComponents';
import "../styles/main.css"

class Modal extends React.Component {
  constructor(){
    super();
    this.state = {
      closeTriggered: false,
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  handleOutsideClick = (e) => {
    const { isDialog, hideCloseButton } = this.props;
    const preventOutsideClick = isDialog || hideCloseButton;
    e.preventDefault();
    if (e.target === e.currentTarget && !this.props.disableOutsideClick && !preventOutsideClick) {
      this.handleClose();
    }
  };

  handleClose = () => {
    const { close } = this.props;
    this.setState({
      closeTriggered: true
    })
    setTimeout(() => {
      this.setState({
        closeTriggered: false
      })
      close();
    }, 350);
  }

  escFunction = (e) => {
    const { isDialog, hideCloseButton, onCancel } = this.props;
    if (e.keyCode === 27 && !hideCloseButton ) {
      isDialog ? onCancel() : this.handleClose()
    }
  }

  render() {
  const {
    size, show, close, header, hasFooter, submitText,
    onSubmit, submitIsLoading, isDialog, isLoading, autoHeight, autoWidth,
    hideCloseButton, onCancel, hideCloseText, cancelText, ...otherProps } = this.props;
  const { closeTriggered } = this.state;

  //Size

  const isFullWidth = size === 'full-page';
  const isLarge = size === 'large';
  const isMedium = size === 'medium';

  return (
    <>
    {show &&
      <div className={classnames({
          "ss-modal--wrapper ss-modal--wrapper__sm": true,
          "ss-modal--wrapper__md": isMedium,
          "ss-modal--wrapper__lg": isLarge,
          "ss-modal--wrapper__full": isFullWidth,
          "ss-modal--wrapper__close": closeTriggered,
        })}
        onClick={e => this.handleOutsideClick(e)}
        {...otherProps}>
        {!hideCloseButton &&
          <div className="flex_row flex_row--row-mob ss-modal--close-wrapper">
            {!hideCloseText && <Text size="h4" color="grey" weight="semibold">CLOSE&nbsp;</Text>}
            <Button onClick={() => this.handleClose()} type="secondary" svgName="close" svgSize="18" svgColor="white" extraClass="ss-modal--close"/>
          </div>
        }
        <div
          style={{ minHeight: autoHeight ? 'auto' : '', width: autoWidth ? 'auto': ''}}
          className={classnames({
          "ss-modal--container": true,
          "ss-modal--container__footer": hasFooter,
          "ss-modal--container__loading": isLoading
          })}>
          {isLoading && <ButtonLoader/>}
          {header &&
            <div className="ss-modal--header">
              <Text size="h1" weight="semibold" color="grey" family="serif">{header}</Text>
            </div>
          }
          {this.props.children}
          {hasFooter &&
            <div className="ss-modal--footer">
              <div className="flex_row flex_row--row-mob">
                <ActionButton isLoading={submitIsLoading} text={submitText} onClick={() => onSubmit()} extraClass="mr--lg"/>
                {(!hideCloseButton || onCancel) && <Button type="link" text={cancelText || 'Cancel'} onClick={() => onCancel ? onCancel() : this.handleClose()} hasUnderline/>}
              </div>
            </div>
          }
        </div>
      </div>
    }
    </>
   );
  }
}

export default Modal