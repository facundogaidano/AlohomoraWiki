import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconNote from '@theme/Admonition/Icon/Note';
const infimaClassName = 'alert alert--grey';
const defaultProps = {
  icon: <IconNote />,
  title: (
    <Translate
      id="theme.admonition.grey"
      description="The default label used for the Grey admonition (:::grey)">
      grey
    </Translate>
  ),
};
export default function AdmonitionTypeGrey(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
