import React from 'react';
import { Text, ToggleSwitch } from 'SSComponents';
import classnames from 'classnames';

class SwitchRow extends React.Component {
  render() {
    const { title, noBorder, extraClass, ...props } = this.props;
    const classList = {
      'ss-switch-row': true,
      'no-border': noBorder,
      [extraClass]: extraClass,
    }
    return (
      <div className={classnames({ ...classList })}>
        <Text size="h4" color="grey" weight="normal">{title}</Text>
        <ToggleSwitch {...props}/>
      </div>
    );
  }
}

export default SwitchRow;