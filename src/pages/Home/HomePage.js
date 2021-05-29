import React from 'react';
import logo from './star-wars-logo.png';
import styles from "./HomePage.module.css";
import { getResults } from '../../utils/starApi';

function HomePage() {
  const [search, setSearch] = React.useState("");
  const timer = React.useRef();

  React.useEffect(() => {
    //debounce
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      getResults(search);
    }, 500);
  }, [search]);

  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <input className={styles.searchInput} onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search by name" />
    </div>
  );
}

export default HomePage;
