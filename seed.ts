import { faker } from '@faker-js/faker/locale/pt_BR'
import db from './lib/db'
import { TipoPessoa } from '@prisma/client'

async function seedFornecedor(qtd: number) {
  try {
    for (let i = 0; i < qtd; i++) {
      const tipoPessoa = faker.helpers.enumValue(TipoPessoa)
      let cnpj, cpf
      if (tipoPessoa === 'JURIDICA') {
        cnpj = faker.person.suffix()
      } else {
        cpf = faker.person.suffix()
      }

      await db.fornecedor.create({
        data: {
          razao_social: faker.company.name(),
          nome_fantasia: faker.company.name(),
          tipo_pessoa: TipoPessoa.FISICA,
          cnpj: cnpj,
          cpf: cpf,
          endereco: faker.location.street(),
          cep: faker.location.countryCode(),
          telefone: faker.phone.number(),
          email: faker.internet.email(),
          site: faker.internet.url(),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      })
    }
    console.log('Seed completed successfully.')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}

async function seedProdutos(qtd: number) {
  try {
    for (let i = 0; i < qtd; i++) {
      await db.produto.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          barCode: faker.string.uuid(),
          costPrice: parseFloat(faker.commerce.price()),
          buyPrice: parseFloat(faker.commerce.price()),
          sellPrice: parseFloat(faker.commerce.price()),
          quantity: faker.number.int({ min: 1, max: 1000 }),
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      })
    }
    console.log('Seed completed successfully.')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}

async function seedClientes(qtd: number) {
  try {
    for (let i = 0; i < qtd; i++) {
      await db.cliente.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          telefone: faker.phone.number(),
          endereco: {
            create: {
              rua: faker.location.street(),
              cidade: faker.location.city(),
              estado: faker.location.street(),
              codigoPostal: String(faker.location.zipCode()),
              pais: faker.location.country(),
            },
          },
          createdAt: faker.date.past(),
          updatedAt: faker.date.recent(),
        },
      })
    }
    console.log('Seed completed successfully.')
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await db.$disconnect()
  }
}
// seedFornecedor(100000)
// seedProdutos(1000000)
seedClientes(1000)
