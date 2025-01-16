import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconInfo from '@theme/Admonition/Icon/Info';
const infimaClassName = 'alert alert--teal';
const defaultProps = {
  icon: <IconInfo />,
  title: (
    <Translate
      id="theme.admonition.teal"
      description="The default label used for the Teal admonition (:::teal)">
      teal
    </Translate>
  ),
};
export default function AdmonitionTypeTeal(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
