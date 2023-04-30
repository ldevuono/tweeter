import baguette from '../assets/baguette.jpg';
import almondCroissant from '../assets/almondCroissant.jpg';
import cardamomBun from '../assets/cardamomBun.jpg';
import croissant from '../assets/croissant.jpg';
import danish from '../assets/danish.jpg';
import sourdough from '../assets/sourdough.jpg';

const Items = () => {

    // array to hold items for sale

    const products = [
        {
            id: 1,
            img: sourdough,
            name: "Sourdough Boule",
            price: "3.50",
            description: "Our twice-fermented sourdough is perfect for slathering with some of our locally-sourced jam."
        },
        {
            id: 2,
            img: baguette,
            name: "Baguette",
            price: "2.50",
            description: "Our oven-fresh baguettes are crunchy on the outside and fluffy on the inside—ideal for a picnic in the park."
        },
        {
            id: 3,
            img: croissant,
            name: "Butter Croissant",
            price: "2.50",
            description: "Flaky, buttery bliss—our croissants are the platonic ideal."
        },
        {
            id: 4,
            img: almondCroissant,
            name: "Almond Croissant",
            price: "2.50",
            description: "Toasty almonds and rich frangipane divinely gild the lily—our personal favourite item."
        },
        {
            id: 5,
            img: cardamomBun,
            name: "Pistachio Cardamom Twist",
            price: "2.50",
            description: "This enriched bun is a spiced, nutty, fluffy dream, especially paired with a latte."
        },
        {
            id: 6,
            img: danish,
            name: "Blueberry Lemon Danish",
            price: "2.50",
            description: "Bright, tangy, and as light and refreshing as a pastry can be."
        },

    ]
    return (
        <>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            <img src={product.img} alt={product.name}></img>
                            <h4>{product.name}</h4>
                            <h5>{product.description}</h5>
                            <h6>{product.price}</h6>
                            <button>Add to cart</button>
                        </li>
                    )
                })
                }
            </ul>
        </>
    );
}

export default Items;