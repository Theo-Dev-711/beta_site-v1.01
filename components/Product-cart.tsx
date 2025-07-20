"use client";

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/components/shared/types"
import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface ProductCartProps {
    product: Product
}

export default function ProductCart({ product }: ProductCartProps) {

    const imageUrl =
        product.images[0].startsWith("http")
            ? product.images[0]
            : `https://i.imgur.com/${product.images[0]}.jpg`;

    return (
        <Card key={product.id} className='p-0 flex flex-col justify-between '>
            <CardHeader className='relative p-0'>
                <Image
                    loader={({ src }) => src}
                    src={imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full rounded-t-lg"
                />
                <Badge className='absolute top-0 left-2'>{product.category.name}</Badge>
                <div className='p-6'>
                    <CardTitle>{product.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>${product.price}</p>
                <CardDescription>{product.description.slice(0, 80)}...</CardDescription>
            </CardContent>
            <CardFooter className='flex justify-end'>
                <Button>
                    <ShoppingCart className='size-4' />
                    Add To Cart
                </Button>
            </CardFooter>
        </Card>
    )
}
