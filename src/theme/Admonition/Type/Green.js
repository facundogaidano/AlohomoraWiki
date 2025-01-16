import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconTip from '@theme/Admonition/Icon/Tip';
const infimaClassName = 'alert alert--green';
const defaultProps = {
  icon: <IconTip />,
  title: (
    <Translate
      id="theme.admonition.green"
      description="The default label used for the Green admonition (:::green)">
      tip
    </Translate>
  ),
};
export default function AdmonitionTypeGreen(props) {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
