import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  id?: string
}
const Container = ({children, className, id}: Props) => {
  return (
    <section
      id={id}
      className={cn(
        'h-full mx-auto w-full max-w-full  px-4 md:px-12 lg:px-24',
        className
      )}
    >
      {children}
    </section>
  )
}
export default Container
