import { Icons } from '@/components/icons'
import { Docker } from '@/components/ui/svgs/docker'
import { ExpressJs } from '@/components/ui/svgs/expressJs'
import { Firebase } from '@/components/ui/svgs/firebase'
import { GraphQL } from '@/components/ui/svgs/graphql'
import { MongoDB } from '@/components/ui/svgs/mongodb'
import { NextjsIconDark } from '@/components/ui/svgs/nextjsIconDark'
import { Nodejs } from '@/components/ui/svgs/nodejs'
import { Postgresql } from '@/components/ui/svgs/postgresql'
import { PrismaIcon } from '@/components/ui/svgs/prismaIcon'
import { ReactLight } from '@/components/ui/svgs/reactLight'
import { ReactNative } from '@/components/ui/svgs/reactNative'
import { Redux } from '@/components/ui/svgs/redux'
import { SocketIo } from '@/components/ui/svgs/socketIo'
import { TailwindCSS } from '@/components/ui/svgs/tailwindcss'
import { Typescript } from '@/components/ui/svgs/typescript'
import { Download, HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
	name: 'Rafi Ferdos',
	initials: 'RF',
	url: 'https://rafi-v4.vercel.app',
	location: 'Dhaka, Bangladesh',
	locationLink: 'https://www.google.com/maps/place/dhaka',
	description:
		'Full Stack Developer. I build production web and mobile apps — frontend, backend, and React Native.',
	summary:
		'Full Stack Developer with 3+ years building production web and mobile applications, with hands-on experience across frontend, backend, and React Native — leading small teams and shipping for foreign clients. Currently completing my BSc. in CSE at Daffodil International University.',
	avatarUrl: '/me.png',
	skills: [
		{ name: 'React', icon: ReactLight },
		{ name: 'Next.js', icon: NextjsIconDark },
		{ name: 'TypeScript', icon: Typescript },
		{ name: 'Node.js', icon: Nodejs },
		{ name: 'PostgreSQL', icon: Postgresql },
		{ name: 'Docker', icon: Docker },
		{ name: 'MongoDB', icon: MongoDB },
		{ name: 'Express.js', icon: ExpressJs },
		{ name: 'GraphQL', icon: GraphQL },
		{ name: 'Prisma', icon: PrismaIcon },
		{ name: 'TailwindCSS', icon: TailwindCSS },
		{ name: 'Firebase', icon: Firebase },
		{ name: 'Socket.io', icon: SocketIo },
		{ name: 'Redux', icon: Redux },
		{ name: 'React Native', icon: ReactNative }
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{
			href: 'https://drive.google.com/file/d/1wFjb1ZqswXkKHIQQwq2_qaqCiauGnX24/view?usp=drive_link',
			icon: Download,
			label: 'View Resume'
		}
	],
	contact: {
		email: 'rafiferdos@gmail.com',
		tel: '+8801921479294',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/rafiferdos',
				icon: Icons.github,
				navbar: true
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/rafiferdos',
				icon: Icons.linkedin,
				navbar: true
			},
			X: {
				name: 'X',
				url: 'https://x.com/rafiferdos', // Update if you have a Twitter/X account
				icon: Icons.x,
				navbar: false
			},
			Youtube: {
				name: 'Youtube',
				url: 'https://youtube.com', // Update if you have a YouTube channel
				icon: Icons.youtube,
				navbar: false
			},
			email: {
				name: 'Send Email',
				url: 'mailto:rafiferdos@gmail.com',
				icon: Icons.email,
				navbar: false
			}
		}
	},

	work: [
		{
			company: 'Sparktech Agency - BDCallingIT',
			href: 'https://bdcallingit.com', // Update to correct URL if different
			badges: [],
			location: 'Dhaka, Bangladesh',
			title: 'Software Developer',
			logoUrl: '/sparktech.png', // Add company logo as /public/sparktech.png
			start: 'July 2025',
			end: 'June 2026',
			description:
				'Expanded from a frontend-only hire to full-stack within 3 months and into React Native within 7. Delivered 2 production ecommerce mobile applications end-to-end. Migrated client REST API integrations to GraphQL, eliminating data over-fetching and reducing frontend state management complexity across multiple products. Built real-time chat and notification systems using Socket.io. Received 2 merit-based salary increases within 10 months.'
		},
		{
			company: 'ZenDevz',
			href: 'https://zendevz.com',
			badges: [],
			location: 'Dhaka, Bangladesh',
			title: 'Full Stack Developer',
			logoUrl: '/zendevz.png', // Add company logo as /public/zendevz.png
			start: 'Nov 2024',
			end: 'Feb 2025',
			description:
				"Built the agency's official portfolio using Next.js, Prisma, and PostgreSQL, delivering a production-grade web presence to support client acquisition. Led delivery of multiple foreign client projects end-to-end, owning requirements, architecture decisions, and deployment with full accountability. Conducted 35+ code reviews as the team's technical lead, maintaining standards across a small team."
		},
		{
			company: 'DIU Robotics Club',
			href: 'https://diu.edu.bd', // Update if the club has its own site
			badges: [],
			location: 'Dhaka, Bangladesh',
			title: 'Web Developer Executive',
			logoUrl: '/diu-robotics.png', // Add club logo as /public/diu-robotics.png
			start: 'Jan 2023',
			end: 'Dec 2024',
			description:
				'Promoted to Web Developer Executive within 8 months and later given ownership of a dedicated web team. Took over the club website — shipped new features, fixed bugs, and improved overall performance. Built a custom event registration system that cut out the manual back-and-forth that used to eat up organizing time.'
		}
	],
	education: [
		{
			school: 'Daffodil International University',
			href: 'https://diu.edu.bd',
			degree:
				'Bachelor of Science in Computer Science & Engineering (BSc. CSE)',
			logoUrl: '/diu.png', // Add university logo as /public/diu.png
			start: '2022',
			end: '2026'
		}
	],
	projects: [
		{
			title: 'Chat Collect',
			href: 'https://chatcollect.com',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://chatcollect.com',
					icon: <Icons.globe className='size-3' />
				}
			],
			image: '',
			video:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'Magic UI',
			href: 'https://magicui.design',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Designed, developed and sold animated UI components for developers.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://magicui.design',
					icon: <Icons.globe className='size-3' />
				},
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: <Icons.github className='size-3' />
				}
			],
			image: '',
			video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		{
			title: 'llm.report',
			href: 'https://llm.report',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://llm.report',
					icon: <Icons.globe className='size-3' />
				},
				{
					type: 'Source',
					href: 'https://github.com/dillionverma/llm.report',
					icon: <Icons.github className='size-3' />
				}
			],
			image: '',
			video: 'https://cdn.llm.report/openai-demo.mp4'
		},
		{
			title: 'Automatic Chat',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://automatic.chat',
					icon: <Icons.globe className='size-3' />
				}
			],
			image: '',
			video:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		}
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			icon: 'public',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: []
		},
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/cryptotrends/cryptotrends'
				}
			]
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/ethdocnet'
				}
			]
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a virtual reality application allowing users to see themselves in third person.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Client Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/RTSPClient'
				}
			]
		},
		{
			title: 'Hack The 6ix',
			dates: 'August 26th - 27th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/ShareShip/ShareShip'
				},
				{
					title: 'Site',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://share-ship.herokuapp.com/'
				}
			]
		},
		{
			title: 'Stupid Hack Toronto',
			dates: 'July 23rd, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/nsagirlfriend/nsagirlfriend'
				}
			]
		},
		{
			title: 'Global AI Hackathon - Toronto',
			dates: 'June 23rd - 25th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Article',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/TinySamosas/'
				}
			]
		},
		{
			title: 'McGill AI for Social Innovation Hackathon',
			dates: 'June 17th - 18th, 2017',
			location: 'Montreal, Quebec',
			description:
				'Developed realtime facial microexpression analyzer using AI',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
			links: []
		},
		{
			title: 'Open Source Circular Economy Days Hackathon',
			dates: 'June 10th, 2017',
			location: 'Toronto, Ontario',
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/genecis'
				}
			]
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
				},
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: <Icons.youtube className='h-4 w-4' />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'HackMining',
			dates: 'May 12th - 14th, 2017',
			location: 'Toronto, Ontario',
			description: 'Developed neural network to optimize a mining process',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
			links: []
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: <Icons.globe className='h-4 w-4' />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: <Icons.youtube className='h-4 w-4' />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'SpaceApps Waterloo',
			dates: 'April 28th - 30th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/earthwatch'
				}
			]
		},
		{
			title: 'MHacks 9',
			dates: 'March 24th - 26th, 2017',
			location: 'Ann Arbor, Michigan',
			description:
				'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/threejs-planes'
				}
			]
		},
		{
			title: 'StartHacks I',
			dates: 'March 4th - 5th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
			win: '1st Place Winner',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/recipic-ionic'
				},
				{
					title: 'Source (Server)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/recipic-rails'
				}
			]
		},
		{
			title: 'QHacks II',
			dates: 'February 3rd - 5th, 2017',
			location: 'Kingston, Ontario',
			description:
				'Developed a mobile game which enables city-wide manhunt with random lobbies',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/dillionverma/human-huntr-react-native'
				},
				{
					title: 'Source (API)',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/mattBlackDesign/human-huntr-rails'
				}
			]
		},
		{
			title: 'Terrible Hacks V',
			dates: 'November 26th, 2016',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mock of Windows 11 with interesting notifications and functionality',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11'
				}
			]
		},
		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: <Icons.github className='h-4 w-4' />,
					href: 'https://github.com/UWPortalSDK/crowmark'
				}
			]
		}
	]
} as const
