import type { FC } from "react";

import { SITE } from "configs/site";

export const HeadContent: FC = () => (
	<>
		<meta name="keywords" content="clips gaming esports e-sports" />
		<meta name="robots" content="index,follow" />
		<meta
			name="description"
			content="Captis is a social media platform built for sharing gaming clips, virtual photography, and E-Sports content. Sign up and start sharing today"
		/>
		<meta
			name="og:description"
			content="Captis is a social media platform built for sharing gaming clips, virtual photography, and E-Sports content. Sign up and start sharing today"
		/>
		<meta name="og:image" content="https://captis.app/logo-512.png" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Captis" />
		<meta
			name="twitter:description"
			content="Captis is a social media platform built for sharing gaming clips, virtual photography, and E-Sports content. Sign up and start sharing today"
		/>
		<meta name="twitter:image" content="https://captis.app/logo-512.png" />
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content="en_US" />
		<link rel="cannonical" href={SITE.url} />
	</>
);
