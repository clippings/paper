import React from 'react';

export interface ListItemInterface {
  handleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
}
