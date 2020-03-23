import React from 'react';
import * as icons from '../SVGIcons';

class SVG extends React.Component {

  handleTitleConversion(str) {
    return str.replace(/(^|\s)\S/g,
      function (t) {
        return t.toUpperCase();
      });
  }
  render() {
    const {
      name, size, color, extraClass 
    } = this.props;
    const properName = this.handleTitleConversion(name) + 'SVG';
    const IconComponent =  icons[properName];
    let strokeColor = 
    color === 'white' ? '#FFFFFF' : 
    color === 'black' ? '#25292D' : 
    color === 'grey' ? '#63686F' : 
    color === 'orange' ? '#E59356' : 
    color === 'purple' ? '#8D5AAD' : color;
    return (
      <IconComponent size={size} color={strokeColor} extraClass={extraClass} />
    );
  }
}

export default SVG;