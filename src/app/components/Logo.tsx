import Image from 'next/image'
 
export default function Logo() {
  return (
    <Image
      src="/images/download.png"
      width={100}
      height={100}
      priority={true}
      alt="Picture of the author"
    />
  )
}