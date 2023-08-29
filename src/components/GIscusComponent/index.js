import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
	const { colorMode } = useColorMode();

	return (
		<Giscus
			repo="shawntabrizi/polkadot-competitive-research"
			repoId="R_kgDOKMq0-A"
			category="General"
			categoryId="DIC_kwDOKMq0-M4CY7xS"
			mapping="pathname"
			strict="0"
			reactionsEnabled="0"
			emitMetadata="1"
			inputPosition="bottom"
			theme={colorMode}
			lang="en"
			crossOrigin="anonymous"
			async
		/>
	);
}
