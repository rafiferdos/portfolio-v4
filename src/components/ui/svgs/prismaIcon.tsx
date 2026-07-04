import type { SVGProps } from 'react'

const PrismaIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} viewBox='0 0 256 256' fill='none'>
		<path d='M128 24 44 168l32 64h136L128 24Z' fill='url(#prisma-gradient)' />
		<path d='M128 56 78 166h100L128 56Z' fill='rgba(255,255,255,.28)' />
		<defs>
			<linearGradient id='prisma-gradient' x1='58' y1='28' x2='196' y2='220' gradientUnits='userSpaceOnUse'>
				<stop stopColor='#0F172A' />
				<stop offset='.5' stopColor='#6D28D9' />
				<stop offset='1' stopColor='#A855F7' />
			</linearGradient>
		</defs>
	</svg>
)

export { PrismaIcon }