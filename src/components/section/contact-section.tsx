import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { DATA } from '@/data/resume'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
	return (
		<div className='border rounded-xl p-10 relative'>
			<div className='absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2'>
				<span className='text-background text-sm font-medium'>Contact</span>
			</div>

			<div className='absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden'>
				<FlickeringGrid
					className='h-full w-full'
					squareSize={2}
					gridGap={2}
					style={{
						maskImage: 'linear-gradient(to bottom, black, transparent)',
						WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
					}}
				/>
			</div>

			<div className='relative flex flex-col items-center gap-5 text-center'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
					Get in Touch
				</h2>

				<p className='mx-auto max-w-lg text-muted-foreground text-balance'>
					Feel free to reach out directly through email or phone. I&apos;m
					always open to professional inquiries and collaboration opportunities.
				</p>

				<div className='flex flex-col items-center gap-3 sm:flex-row sm:gap-6'>
					<Link
						href={`mailto:${DATA.contact.email}`}
						className='inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
					>
						<Mail className='size-4' />
						{DATA.contact.email}
					</Link>

					<Link
						href={`tel:${DATA.contact.tel.replace(/\s+/g, '')}`}
						className='inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
					>
						<Phone className='size-4' />
						01921479294
					</Link>
				</div>
			</div>
		</div>
	)
}
