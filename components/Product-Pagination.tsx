"use client"
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { parseAsInteger, useQueryState } from 'nuqs'
import { ChevronLeft } from 'lucide-react'
import { Button } from './ui/button'

interface ProductPaginationProps {
    refetchProducts: () => Promise<void>
}
export default function ProductPagination({ refetchProducts }: ProductPaginationProps) {
    const [offset, setOffset] = useQueryState(
        "offset",
        parseAsInteger.withDefault(0)
    )

    const handleOffsetChange = (value:number) =>{
        setOffset(value);
        setTimeout(()=>{
            refetchProducts();
        }, 100)

    }
  return (
      <Pagination>
          <PaginationContent>
            {offset > 1 && (
                <>
                      <PaginationItem>
                          {/* Button one */}
                          <Button variant="outline" onClick={() => handleOffsetChange(offset - 1)}>
                              <ChevronLeft className='size-4' />Previous
                          </Button>
                      </PaginationItem>
                      <PaginationItem>
                          <Button variant="outline" onClick={() => handleOffsetChange(offset - 1)}>
                              <ChevronLeft className='size-4' />{offset - 1}
                          </Button>
                      </PaginationItem>
                </>
            )}
              <PaginationItem>
                  <Button variant="outline" disabled>
                      {offset}
                  </Button>
              </PaginationItem>
              <PaginationItem>
                  <Button variant="outline" onClick={() => handleOffsetChange(offset + 1)}>
                      {offset + 1}
                  </Button>
              </PaginationItem>
          </PaginationContent>
      </Pagination>
  )
}


