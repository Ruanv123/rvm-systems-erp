import { getProducts } from '@/actions/product'
import { ProductModal } from '@/components/modals/product-modal'
import { PageTitle } from '@/components/page-title'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'
import { DeleteProductTrash } from '../../../components/delete-product'
import PaginationC from '../_components/pagination'
import { formatPrice } from '@/lib/utils'

async function ProdutosPage({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  const search = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 10
  const offset = (currentPage - 1) * limit

  const { data, totalPages } = await getProducts({ search, offset, limit })

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Produtos' />
        <ProductModal />
      </div>

      <div className='space-y-2.5'>
        <div className='mt-10 space-y-2.5 overflow-hidden rounded-md border'>
          <Suspense
            key={search + currentPage}
            fallback={<Loader className='h-[50px] w-[50px] animate-spin' />}
          >
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
                {data && data.length ? (
                  data?.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>
                        {product.barCode?.length ? product.barCode : '-'}
                      </TableCell>
                      <TableCell>{formatPrice(product.costPrice)}</TableCell>
                      <TableCell>{formatPrice(product.buyPrice)}</TableCell>
                      <TableCell>{formatPrice(product.sellPrice)}</TableCell>
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
          </Suspense>
        </div>
        <PaginationC totalPages={totalPages} />
      </div>
    </div>
  )
}

export default ProdutosPage
