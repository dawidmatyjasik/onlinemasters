import React from 'react';

import { Text } from 'components/atoms/text/Text';

type StepProps = {
  icon: string;
  description: string;
};

export const Step = (props: StepProps) => {
  const { icon, description } = props;
  console.log(icon); // TODO: icon

  return (
    <div>
      <Text size="h6">{description}</Text>
    </div>
  );
};
