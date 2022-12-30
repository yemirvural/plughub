import styles from './styles.module.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

function Main() {
  return (
    <div>
      <div className={styles.searchbox}>
        <span><button><AiOutlineMenu /></button></span>
        <div className={styles.searchinput}>
          <input type="text" id='search' placeholder='Search for a Charging Location' />
          <label htmlFor="search"><BiSearchAlt2 /></label>
        </div>
      </div>
    </div>
  )
}

export default Main