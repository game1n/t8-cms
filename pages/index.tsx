import styles from '../styles/Home.module.css'
import { Loading } from "@nextui-org/react";

export default function Home() {
  // useEffect(() => {
  //   router.push('/login');
  // }, [])
  return (
    <div className={styles.container}>
      <Loading />
    </div>  
  )
}
