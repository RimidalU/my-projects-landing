'use client'

import Image from 'next/image'
import { useState } from 'react'

const DEFAULT_IMG: string = '/projects/default-image.png'

interface CustomImageProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
}

const CustomImage = ({
    src,
    alt,
    width,
    height,
    className,
}: CustomImageProps) => {
    const [imageError, setImageError] = useState(false)

    return (
        <Image
            src={imageError ? DEFAULT_IMG : src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={() => setImageError(true)}
        />
    )
}

export default CustomImage
