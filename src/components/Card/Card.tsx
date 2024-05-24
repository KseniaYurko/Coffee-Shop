import styles from './style.module.css'
import star_icon from '../../assets/icons/Star.svg'
import star_fill_icon from '../../assets/icons/Star_fill.svg'

interface CardProps {
    id: number,
    name: string,
    image: string,
    price: number,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean,
}

const Card: React.FC<CardProps> = ({id, name, image, price, rating, votes, popular, available}) => {
    
    return (
        <div className={styles.container}>
            <img 
                className={styles.img} 
                src={image} 
                alt="product photo" 
                loading='lazy'
            />
            
            {popular ?
                (<div className={styles.popular}>Popular</div>) : null
            }
            <div className={styles.info_container}>
                <div className={styles.heading}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div className={styles.info}>
                    {rating === null ?
                        (<>
                            <div className={styles.rating_container}>
                                <img 
                                    className={styles.rating_icon} 
                                    src={star_icon} 
                                    alt="star_icon" 
                                    loading='lazy'
                                />
                                <div className={styles.rating}>No rating</div>
                            </div>
                            {!available ? 
                                (<div className={styles.available}>Sold out</div>) : null
                            }
                        </>) :
                        (<>
                            <div className={styles.rating_container}>
                                <img 
                                    className={styles.rating_icon} 
                                    src={star_fill_icon} 
                                    alt="star_icon" 
                                    loading='lazy'
                                />
                            
                                <div className={styles.rating}>{rating}</div>
                                <div className={styles.votes}>{`(${votes} votes)`}</div>
                            </div>
                            
                            {!available ? 
                                (<div className={styles.available}>Sold out</div>) : null
                            }
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Card