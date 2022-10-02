import { CircularProgress, CircularProgressProps } from '@mui/material';
import React, { ReactElement } from 'react';

export type LoaderProps = CircularProgressProps & {
  shouldDisplaySpinner: boolean;
};

export const Loader = ({
  shouldDisplaySpinner,
  ...props
}: LoaderProps): ReactElement | null =>
  shouldDisplaySpinner ? <CircularProgress {...props} /> : null;
