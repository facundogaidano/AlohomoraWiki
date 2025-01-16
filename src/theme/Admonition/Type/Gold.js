import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const infimaClassName = 'alert alert--gold';

const defaultProps = {
	icon: <FontAwesomeIcon icon={faPlusCircle} />,
	title: (
		<Translate
			id="theme.admonition.gold"
			description="The default label used for the Gold admonition (:::gold)">
			golden
		</Translate>
	),
};

export default function AdmonitionTypeGold(props) {
	return (
    <AdmonitionLayout
    {...defaultProps}
    {...props}
    className={clsx(infimaClassName, props.className)}>
    {props.children}
    </AdmonitionLayout>
	);
}