import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://myownsite-emerald.vercel.app'), // Production URL
	title: 'myOwnsite',
	description:
		'Welcome to my portfolio! I am a passionate designer who love creating simple and effective solutions. Explore my projects and creations approach.',
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
		],
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',

	keywords: [
		'Web Developer',
		'Simple Design',
		'JavaScript',
		'React',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Data Analystics',
		'Dion J MAtthew K',
	],
	authors: [{ name: 'Dion J MAtthew K' }],
	creator: 'Dion J MAtthew K',
	openGraph: {
		title: 'Dion J MAtthew K - Designer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://myownsite-emerald.vercel.app',
		siteName: 'myOwnPortfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Dion J MAtthew K - Designer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Dion J MAtthew K - Designer Portfolio',
		description: 'Welcome to my portfolio! I am a passionate designer who love creating simple and effective solutions.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
