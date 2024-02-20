import Image from 'next/image'
import { Statistics } from './statistics'

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='bg-muted/50 border rounded-lg py-12'>
        <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <Image
            src={
              'https://shadcn-landing-page.vercel.app/assets/pilot-gO-DZ75j.png'
            }
            alt=''
            width={300}
            height={0}
            className='w-[300px] h-auto object-contain rounded-lg'
          />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
                  About{' '}
                </span>
                Company
              </h2>
              <p className='text-xl text-muted-foreground mt-4'>
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
