import { CircularProgress, CircularProgressProps } from '@mui/material';
import React, { ReactElement } from 'react';

export type LoaderProps = CircularProgressProps & {
  shouldDisplayLoader: boolean;
};

export const Loader = ({
  shouldDisplayLoader,
  ...props
}: LoaderProps): ReactElement | null =>
  shouldDisplayLoader ? <CircularProgress {...props} /> : null;
