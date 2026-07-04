import Image from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

type ReactNativeProps = ComponentPropsWithoutRef<typeof Image>

const ReactNative = ({ className, alt = '', ...props }: ReactNativeProps) => (
	<Image
		src='/react-native.png'
		alt={alt}
		width={64}
		height={64}
		className={cn('object-contain', className)}
		{...props}
	/>
)

export { ReactNative }
