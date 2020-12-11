import React, { FC } from 'react';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { RadioButtonPropType } from '../../components/RadioButton/types/RadioButtonPropType';

const RadioButtonExample: FC<RadioButtonPropType> = () => {
  return (
    <div>
      <RadioButton value="yes" name="radio">
        Yes
      </RadioButton>
      <RadioButton value="no" name="radio">
        No
      </RadioButton>
    </div>
  );
};

export default RadioButtonExample;
