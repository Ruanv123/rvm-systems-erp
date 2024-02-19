import { ProductModal } from '@/components/modals/product-modal'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAllProducts } from '@/data/produtos'
import { Download, Filter } from 'lucide-react'
import Link from 'next/link'
import { DeleteProductTrash } from '../../../components/delete-product'

const ProdutosPage = async () => {
  const productsData = await getAllProducts()
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Produtos' />
        <ProductModal />
      </div>
      <div className='space-y-2.5'>
        {/* <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <Input placeholder='filtrar por nome...' className='w-52' />
            <Button className='gap-2'>
              <Filter className='w-4 h-4' />
              Filtrar
            </Button>
          </div>
          <Button variant='secondary' className='gap-2'>
            <Download className='w-4 h-4' />
            Export CSV
          </Button>
        </div> */}

        <div className='space-y-2.5 mt-10 border rounded-md overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>BarCode</TableHead>
                <TableHead>Cost Price</TableHead>
                <TableHead>Buy Price</TableHead>
                <TableHead>Sell Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsData && productsData.length ? (
                productsData?.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      {/* <Link
                        className='text-blue-400 underline'
                        href={`/dashboard/produtos/${product.id}`}
                      > */}
                      {product.barCode?.length ? product.barCode : '-'}
                      {/* </Link> */}
                    </TableCell>
                    <TableCell>
                      {product.costPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      {product.buyPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      {product.sellPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      <DeleteProductTrash id={product.id} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className='py-10 text-center text-muted-foreground'
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default ProdutosPage
