import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, TInput } from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon && (
        <MaterialIcons name={icon} size={20} color="rgba(0, 0, 0, 0.3)" />
      )}
      <TInput {...rest} />
    </Container>
  );
}
