import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Card from '../Card/Card';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;
}

interface CardListProps {
    filter: 'all' | 'available';
}

const CardList: React.FC<CardListProps> = ({ filter }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.available);

    return (
        <div className={styles.cardList}>
            {filteredProducts.map(product => (
                <Card key={product.id} {...product}/>
            ))}
        </div>
    )
}

export default CardList