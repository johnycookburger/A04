import Image from 'next/image';
import styles from './card.module.css';

export default function Card({venueName, imgSrc} : {venueName:string, imgSrc:string}) {
  return(
    <div className = 'w-1/5 h-[300px] rounded-lg shadow-lg'>
      <div className='w-full h-[70%] relative rounded-t-lg'>
          <Image src={imgSrc}
          alt = 'cover'
          fill = {true}
          className='object-cover rounded-t-lg'/>
      </div>  
      <div className = 'w-full h-[30%] p-[10px]'>{venueName}</div> 
    </div>
  );
}