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

const FornecedorPage = async () => {
  const fornecedorData = await getAllFornecedores()

  const formataCPf = (cpf: string) => {
    if (cpf.length == 11) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    } else {
      return cpf.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
      )
    }
  }

  function formatCEP(cep: string): string {
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')
  }

  function formatPhoneNumber(phoneNumber: string): string {
    if (phoneNumber.length === 10) {
      return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    } else if (phoneNumber.length === 11) {
      return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else {
      // Se o número de dígitos estiver incorreto, retorna o número original
      return phoneNumber
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Fornecedores' />
        <FornecedorModal />
      </div>
      <div className='space-y-2.5'>
        <div className='space-y-2.5 mt-10 border rounded-md overflow-hidden'>
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
                      {fornecedor.cpf?.length
                        ? formataCPf(fornecedor.cpf)
                        : fornecedor.cnpj
                        ? formataCPf(fornecedor.cnpj)
                        : '-'}
                    </TableCell>
                    <TableCell>{formatCEP(fornecedor.cep)}</TableCell>
                    <TableCell>{fornecedor.endereco}</TableCell>
                    <TableCell>
                      {formatPhoneNumber(fornecedor.telefone)}
                    </TableCell>
                    <TableCell>{fornecedor.email}</TableCell>
                    <TableCell>
                      {fornecedor.site?.length ? fornecedor.site : '-'}
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