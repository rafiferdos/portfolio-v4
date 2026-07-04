import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

type ReactNativeProps = ComponentPropsWithoutRef<typeof Image>

const ReactNative = ({
	className,
	alt = '',
	src = '/react-native.png',
	...props
}: ReactNativeProps) => (
	<Image
		src={src}
		alt={alt}
		width={64}
		height={64}
		className={cn('object-contain', className)}
		{...props}
	/>
)

export { ReactNative }
