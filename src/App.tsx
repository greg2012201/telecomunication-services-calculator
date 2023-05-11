import ProductList from "./components/ProductList";
import { ProductContainer, ProductProvider } from "./services/Product";
import styles from "./App.module.css";

function App() {
  return (
    <ProductProvider>
      <div className={styles.layout}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Telco Services calculator</h1>
          <p>Find your best offer</p>
        </div>
        <ProductContainer>
          <ProductList />
        </ProductContainer>
      </div>
    </ProductProvider>
  );
}

export default App;
