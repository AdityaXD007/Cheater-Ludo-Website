import Image from 'next/image'
import Link from 'next/link'

const IconLogo = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2 justify-center">
      <div className="size-10 bg-primary rounded-full flex items-center justify-center aspect-square">
        <Image
          src={'/images/icon-black.png'}
          alt="icon"
          height={30}
          width={30}
        />
      </div>
      <p className={` text-lg font-semibold tracking-wide whitespace-nowrap`}>
        CV Maker
      </p>
    </Link>
  )
}

export default IconLogo
