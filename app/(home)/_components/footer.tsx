import Link from 'next/link'

export const Footer = () => {
  return (
    <footer id='footer'>
      <hr className='mx-auto w-11/12' />

      <section className='container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6'>
        <div className='col-span-full xl:col-span-2'>
          <Link href='/' className='flex text-xl font-bold'>
            {/* Logo */}
            Rvm Systems
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Follow US</h3>
          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Github
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Twitter
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Dribbble
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Platforms</h3>
          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Web
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Mobile
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Desktop
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>About</h3>
          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Features
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Pricing
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              FAQ
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-bold'>Community</h3>
          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Youtube
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Discord
            </Link>
          </div>

          <div>
            <Link href='#' className='opacity-60 hover:opacity-100'>
              Twitch
            </Link>
          </div>
        </div>
      </section>

      <section className='container pb-14 text-center'>
        <h3>
          &copy; 2024 made by{' '}
          <Link
            target='_blank'
            href='https://github.com/Ruanv123'
            className='border-primary text-primary transition-all hover:border-b-2'
          >
            Ruan Victor
          </Link>
        </h3>
      </section>
    </footer>
  )
}
