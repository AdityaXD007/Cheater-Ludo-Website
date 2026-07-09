import Image from 'next/image'
import Link from 'next/link'

const IconLogo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 justify-center">
      <Image
        src={'/images/logo.png'}
        alt="icon"
        height={40}
        width={40}
        className="rounded-xl drop-shadow-sm"
      />
      <p className={` text-lg font-semibold tracking-wide whitespace-nowrap`}>
        Cheater Ludo
      </p>
    </Link>
  )
}

export default IconLogo
