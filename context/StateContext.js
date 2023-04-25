import React, 
{
    createContext,
    useContext,
    useEffect,
    useState
}  from "react";
import { toast } from '../sanity_estore/node_modules/react-hot-toast';

//calling createContext as a Hook
const Context = createContext();

//context functional component
export const StateContext = ({ children }) =>{

    // managing the cart state
    const [showCart, setShowCart] = useState(false);

    //to know what items we have in our cart.
    //we'll fill it with the data from local storage
    const [cartItems, setCartItems] = useState([]);

    //keeping track of total price
    const [totalPrice, setTotalPrice] = useState();

    //manage total quantities we work with
    const [totalQuantities, setTotalQuantities] = useState(0);

    //to determine or change the quantity of products availabe
    const [qty, setQty] = useState(1);

    //adding an item to cart
    const onAdd = (product, quantity) => {

        //checking if the item is already in the cart
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) =>{
                if(cartProduct._id = product._id) return{
                     ...cartProduct,
                     quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        }else{
            product.quantity = quantity;
            
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    //creating a dynamic quantity update functions
    const incQty = () =>{
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () =>{
        setQty((prevQty) => {
            if (prevQty -1 < 1) return 1;
            
            return prevQty - 1
        });
    }

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice, 
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);