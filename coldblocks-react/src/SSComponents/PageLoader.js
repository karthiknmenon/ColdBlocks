import React from 'react';
import { Text, ButtonLoader } from '../SSComponents/index';

function PageLoader(props){
  return (
    <div className="flex_row flex_row--row-mob flex_row--justify-center ss-page-loader--dots">
      <Text size="h2" color="grey" opacity={0.4} weight="normal">
        {props.text}
      </Text>
      <ButtonLoader />
    </div>
  );
};

export default PageLoader;