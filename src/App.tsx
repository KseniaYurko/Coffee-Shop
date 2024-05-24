import styles from './App.module.css';
import { useState } from 'react';
import vector from './assets/icons/vector.svg'
import CardList from './components/CardList/CardList';

function App() {

  const [filter, setFilter] = useState<'all' | 'available'>('all');

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.header}>Our Collection</h1>
        <img 
          className={styles.vector}
          src={vector}
          alt="line" 
        />
        <p className={styles.text}>
          Introducing our Coffee Collection, a selection of unique coffees <br/> 
          from different roast types and origins, expertly roasted in small <br/> 
          batches and shipped fresh weekly.
        </p>
        <div className={styles.buttons_container}>
          <button 
            className={`${styles.button_item} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Products
          </button>
          <button 
            className={`${styles.button_item} ${filter === 'available' ? styles.active : ''}`}
            onClick={() => setFilter('available')}
          >
            Avaliabe Now
          </button>
        </div>
        <div className={styles.container_products}>
          <CardList filter={filter}/>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default App;
