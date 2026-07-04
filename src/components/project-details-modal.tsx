/* eslint-disable @next/next/no-img-element */
'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import { ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Markdown from 'react-markdown'

type Project = (typeof DATA.projects)[number]

type ProjectDetailsModalProps = {
	project: Project | null
	open: boolean
	onClose: () => void
}

export default function ProjectDetailsModal({
	project,
	open,
	onClose
}: ProjectDetailsModalProps) {
	useEffect(() => {
		if (!open) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		const originalOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = originalOverflow
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [open, onClose])

	if (!open || !project || typeof document === 'undefined') {
		return null
	}

	const preview =
		(project as { video?: string; image?: string }).video ||
		(project as { video?: string; image?: string }).image

	const mediaProject = project as { video?: string; image?: string }

	return createPortal(
		<div
			className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-10'
			onClick={onClose}
			role='presentation'
		>
			<div
				className='mx-auto flex h-full w-full max-w-5xl items-center justify-center'
				onClick={(event) => event.stopPropagation()}
				role='presentation'
			>
				<div className='w-full max-h-[calc(100vh-3rem)] overflow-hidden rounded-3xl border border-border bg-background shadow-2xl'>
					<div className='flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6'>
						<div className='min-w-0'>
							<p className='text-xs uppercase tracking-[0.2em] text-muted-foreground'>
								Project details
							</p>
							<h2 className='mt-1 text-2xl font-semibold tracking-tight sm:text-3xl'>
								{project.title}
							</h2>
							<p className='mt-1 text-sm text-muted-foreground'>
								{project.dates}
							</p>
						</div>

						<button
							type='button'
							onClick={onClose}
							className='rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
							aria-label='Close project details'
						>
							<X className='size-4' />
						</button>
					</div>

					<div className='grid max-h-[calc(100vh-8rem)] overflow-y-auto md:grid-cols-[1.2fr_0.8fr]'>
						<div className='border-b border-border md:border-b-0 md:border-r'>
							<div className='aspect-video w-full bg-muted'>
								{mediaProject.video ?
									<video
										src={mediaProject.video}
										autoPlay
										loop
										muted
										playsInline
										className='h-full w-full object-cover'
									/>
								: mediaProject.image ?
									<img
										src={mediaProject.image}
										alt={project.title}
										className='h-full w-full object-cover'
									/>
								:	<div className='flex h-full w-full items-center justify-center text-sm text-muted-foreground'>
										No preview available
									</div>
								}
							</div>

							<div className='space-y-4 p-5 sm:p-6'>
								<div>
									<p className='text-sm font-medium text-muted-foreground'>
										Overview
									</p>
									<div className='prose prose-sm mt-3 max-w-none text-pretty font-sans leading-relaxed text-foreground dark:prose-invert'>
										<Markdown>{project.description}</Markdown>
									</div>
								</div>

								{project.href ?
									<Link
										href={project.href}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent'
									>
										Open live site
										<ArrowUpRight className='size-4' />
									</Link>
								:	null}
							</div>
						</div>

						<div className='space-y-6 p-5 sm:p-6'>
							<div>
								<p className='text-sm font-medium text-muted-foreground'>
									Technologies
								</p>
								<div className='mt-3 flex flex-wrap gap-2'>
									{project.technologies.map((technology) => (
										<Badge
											key={technology}
											variant='outline'
											className='h-8 rounded-xl border-border px-3 text-xs font-medium'
										>
											{technology}
										</Badge>
									))}
								</div>
							</div>

							<Separator />

							<div>
								<p className='text-sm font-medium text-muted-foreground'>
									Links
								</p>
								<div className='mt-3 flex flex-col gap-2'>
									{project.links?.length ?
										project.links.map((link) => (
											<Link
												key={`${project.title}-${link.type}`}
												href={link.href}
												target='_blank'
												rel='noopener noreferrer'
												className={cn(
													'inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:bg-accent'
												)}
											>
												{link.icon}
												<span>{link.type}</span>
												<ArrowUpRight className='ml-auto size-4 text-muted-foreground' />
											</Link>
										))
									:	<p className='text-sm text-muted-foreground'>
											No external links added yet.
										</p>
									}
								</div>
							</div>

							<Separator />

							<div>
								<p className='text-sm font-medium text-muted-foreground'>
									Preview
								</p>
								<div className='mt-3 rounded-2xl border border-border bg-muted p-3 text-xs text-muted-foreground'>
									{preview ?
										'This project includes a visual preview.'
									:	'No image or video preview is attached.'}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body
	)
}
