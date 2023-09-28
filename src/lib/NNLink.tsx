import Link, { type LinkProps } from 'next/link';
import React, { useMemo } from 'react';
import { getPath } from './getPath';
import { ExtractRouteParams, Routes, RoutesWithParams, RoutesWithoutParams } from './types';

type TRouteWithParamsProps = {
  route: RoutesWithParams;
  params: ExtractRouteParams<Routes[RoutesWithParams]>;
};

type TRouteWithoutParamsProps = {
  route: RoutesWithoutParams;
  params?: never;
};

type TRouteProps = TRouteWithParamsProps | TRouteWithoutParamsProps;

type TNNLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  Omit<LinkProps, 'href'> & {
    children?: React.ReactNode;
  } & TRouteProps;

const NNLink = ({ children, route, params, ...rest }: TNNLinkProps): JSX.Element => {
  const url = useMemo(() => {
    if (params) {
      return getPath(route, params);
    }

    return getPath(route);
  }, [route, params]);

  return (
    <Link {...rest} href={url}>
      {children}
    </Link>
  );
};

export default NNLink;
