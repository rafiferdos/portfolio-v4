/* eslint-disable @next/next/no-img-element */
'use client'

import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Markdown from 'react-markdown'

type Project = (typeof DATA.projects)[number]

type ProjectCardProps = {
	project: Project
	onOpen: (project: Project) => void
	className?: string
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
	const [imageError, setImageError] = useState(false)

	if (!src || imageError) {
		return <div className='w-full h-48 bg-muted' />
	}

	return (
		<img
			src={src}
			alt={alt}
			className='w-full h-48 object-cover'
			onError={() => setImageError(true)}
		/>
	)
}

export function ProjectCard({ project, onOpen, className }: ProjectCardProps) {
	const imageSrc =
		'image' in project && typeof project.image === 'string' ? project.image : ''
	return (
		<div
			role='button'
			tabIndex={0}
			onClick={() => onOpen(project)}
			onKeyDown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault()
					onOpen(project)
				}
			}}
			className={cn(
				'group flex cursor-pointer flex-col h-full overflow-hidden rounded-xl border border-border bg-background transition-all duration-200 hover:ring-2 hover:ring-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				className
			)}
		>
			<div className='relative shrink-0'>
				{project.video ?
					<video
						src={project.video}
						autoPlay
						loop
						muted
						playsInline
						className='h-48 w-full object-cover'
					/>
				: imageSrc ?
					<ProjectImage src={imageSrc} alt='' />
				:	<div className='h-48 w-full bg-muted' />}

				{project.links?.length ?
					<div className='absolute right-2 top-2 flex flex-wrap gap-2'>
						{project.links.map((link) => (
							<Link
								href={link.href}
								key={`${project.title}-${link.type}`}
								target='_blank'
								rel='noopener noreferrer'
								onClick={(event) => event.stopPropagation()}
							>
								<Badge
									className='flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90'
									variant='default'
								>
									{link.icon}
									{link.type}
								</Badge>
							</Link>
						))}
					</div>
				:	null}
			</div>

			<div className='flex flex-1 flex-col gap-3 p-6'>
				<div className='flex items-start justify-between gap-2'>
					<div className='flex flex-col gap-1'>
						<h3 className='font-semibold'>{project.title}</h3>
						<time className='text-xs text-muted-foreground'>
							{project.dates}
						</time>
					</div>
					<span className='mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground'>
						Details
						<ArrowUpRight className='h-4 w-4' aria-hidden />
					</span>
				</div>

				<div className='prose max-w-full flex-1 text-pretty text-xs font-sans leading-relaxed text-muted-foreground dark:prose-invert'>
					<Markdown>{project.description}</Markdown>
				</div>

				<div className='mt-auto flex flex-wrap gap-1'>
					{project.technologies.map((technology) => (
						<Badge
							key={technology}
							className='h-6 w-fit border border-border px-2 text-[11px] font-medium'
							variant='outline'
						>
							{technology}
						</Badge>
					))}
				</div>
			</div>
		</div>
	)
}
