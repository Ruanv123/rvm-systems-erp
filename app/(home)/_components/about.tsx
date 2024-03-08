import Image from 'next/image'
import { Statistics } from './statistics'

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='rounded-lg border bg-muted/50 py-12'>
        <div className='flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12'>
          <Image
            src={
              'https://shadcn-landing-page.vercel.app/assets/pilot-gO-DZ75j.png'
            }
            alt=''
            width={300}
            height={0}
            className='h-auto w-[300px] rounded-lg object-contain'
          />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl font-bold md:text-4xl'>
                <span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
                  About{' '}
                </span>
                Company
              </h2>
              <p className='mt-4 text-xl text-muted-foreground'>
                O RVM Systems é um ERP completo projetado para simplificar e
                automatizar operações empresariais. Com recursos avançados de
                gestão, oferecemos uma solução abrangente para impulsionar a
                eficiência e maximizar o desempenho em todos os aspectos do seu
                negócio.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}
