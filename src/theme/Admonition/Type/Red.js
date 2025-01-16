import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
const infimaClassName = 'alert alert--red';
const defaultProps = {
  icon: '❕',
  title: (
    <Translate
      id="theme.admonition.red"
      description="The default label used for the Red admonition (:::red)">
      red
    </Translate>
  ),
};
export default function AdmonitionTypeRed(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
