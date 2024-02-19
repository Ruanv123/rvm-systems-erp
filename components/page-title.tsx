interface TitleProps {
  title: string
}

export const PageTitle = ({ title }: TitleProps) => {
  return (
    <>
      <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
    </>
  )
}
