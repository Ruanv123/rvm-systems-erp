import { DeleteFornecedorTrash } from '@/components/delete-fornecedor'
import { FornecedorModal } from '@/components/modals/fornecedor-modal'
import { PageTitle } from '@/components/page-title'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAllFornecedores } from '@/data/fornecedor'
import { Pencil } from 'lucide-react'
import Link from 'next/link'

const FornecedorPage = async () => {
  let fornecedorData
  try {
    fornecedorData = await getAllFornecedores()
  } catch (error) {
    alert(`'erro: ' ${error}`)
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Fornecedores' />
        <FornecedorModal />
      </div>
      <div className='space-y-2.5'>
        <div className='mt-10 space-y-2.5 overflow-hidden rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Razão Social</TableHead>
                <TableHead>Nome Fantasia</TableHead>
                <TableHead>Tipo de Pessoa</TableHead>
                <TableHead>Cpf / Cnpj</TableHead>
                <TableHead>Cep</TableHead>
                <TableHead>Endereço</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Site</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fornecedorData && fornecedorData.length ? (
                fornecedorData?.map((fornecedor) => (
                  <TableRow key={fornecedor.id}>
                    <TableCell>{fornecedor.id}</TableCell>
                    <TableCell>{fornecedor.razao_social}</TableCell>
                    <TableCell>{fornecedor.nome_fantasia}</TableCell>
                    <TableCell>
                      <Badge>{fornecedor.tipo_pessoa}</Badge>
                    </TableCell>
                    <TableCell>
                      {fornecedor.cpf?.length ? fornecedor.cpf : '-'}
                    </TableCell>
                    <TableCell>{fornecedor.cep}</TableCell>
                    <TableCell>{fornecedor.endereco}</TableCell>
                    <TableCell>{fornecedor.telefone}</TableCell>
                    <TableCell>{fornecedor.email}</TableCell>
                    <TableCell>
                      {fornecedor.site && fornecedor.site?.length ? (
                        <Link
                          href={fornecedor.site}
                          target='_blank'
                          className='underline'
                        >
                          {fornecedor.site}
                        </Link>
                      ) : (
                        '-'
                      )}
                    </TableCell>
                    <TableCell className='flex gap-1'>
                      <DeleteFornecedorTrash id={fornecedor.id} />
                      <Pencil className='h-5 w-5' />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    className='py-10 text-center text-muted-foreground'
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default FornecedorPage
