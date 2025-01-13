import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--golden';

const defaultProps = {
icon: <FontAwesomeIcon icon={faPlusCircle} />,
title: (
    <Translate
    id="theme.admonition.golden"
    description="The default label used for the Golden admonition (:::golden)">
    golden
    </Translate>
),
};

export default function AdmonitionTypeGolden(props) {
return (
    <AdmonitionLayout
    {...defaultProps}
    {...props}
    className={clsx(infimaClassName, props.className)}>
    {props.children}
    </AdmonitionLayout>
);
}