import Image from 'next/image';
import styles from './banner.module.css'

export default function Banner() {
  return(
    <div className={styles.banner}>
      <Image src={'/images/banner.jpg'}
        alt='cover'
        fill={true}
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.bannerText}>
        <h1 className='text-4xl font-bold font-sans'>where every event finds its venue</h1>
        <h3 className='text-xl font-light mt-2'>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we're connecting people to the perfect place.</h3>
      </div>
    </div>
  )
}