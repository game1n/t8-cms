import React, { FunctionComponent, ReactElement } from 'react';

import {
  CircularProgress,
  CircularProgressProps,
  LinearProgress,
  LinearProgressProps,
} from '@mui/material';

export type LoaderProps = {
  shouldDisplayLoader: boolean;
};

export type CircularLoaderProps = LoaderProps & CircularProgressProps;
export type LinearLoaderProps = LoaderProps & LinearProgressProps;

export type MUILoadersProps = CircularLoaderProps | LinearProgressProps;

function renderLoader<T extends MUILoadersProps>(
  shouldRenderLoader: boolean,
  Component: FunctionComponent<T>,
  props: T
): ReactElement | null {
  return shouldRenderLoader ? <Component {...props} /> : null;
}

export const CircularLoader = ({
  shouldDisplayLoader,
  ...props
}: CircularLoaderProps): ReactElement | null =>
  renderLoader(shouldDisplayLoader, CircularProgress, props);

export const LinearLoader = ({
  shouldDisplayLoader,
  ...props
}: LinearLoaderProps): ReactElement | null =>
  renderLoader(shouldDisplayLoader, LinearProgress, props);
