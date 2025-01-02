'use client'

import Image from 'next/image'
import { useState } from 'react'
import { clsx } from 'clsx'

import Spinner from './Spinner'

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
    const [loading, setLoading] = useState(true)

    return (
        <>
            {loading && <Spinner />}
            <Image
                src={imageError ? DEFAULT_IMG : src}
                alt={alt}
                width={width}
                height={height}
                className={clsx('w-full', className)}
                onError={() => {
                    setImageError(true)
                    setLoading(false)
                }}
                onLoad={() => {
                    setLoading(false)
                }}
                style={{ visibility: loading ? 'hidden' : 'visible' }}
            />
        </>
    )
}

export default CustomImage
