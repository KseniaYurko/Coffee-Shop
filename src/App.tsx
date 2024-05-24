import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.header}>Our Collection</h1>
        <p className={styles.text}>Introducing our Coffee Collection, a selection of unique coffees <br/> from different roast types and origins, expertly roasted in small <br/> batches and shipped fresh weekly.</p>
        <div className={styles.buttons_container}>
          <button className={styles.button_item}>
            All Products
          </button>
          <button className={styles.button_item}>
            Avaliabe Now
          </button>
        </div>
        <div className={styles.container_products}>

        </div>
      </div>
    </div>
  );
}

export default App;
