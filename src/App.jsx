import { useState } from 'react'

function App() {
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: 'Black T shirt',
      price: 5
    },
    {
      id: 2,
      name: 'Hanger Set',
      price: 8
    },
    {
      id: 3,
      name: 'Thoub',
      price: 12
    },
    {
      id: 4,
      name: 'Computer Bag',
      price: 20
    },
    {
      id: 5,
      name: 'Couch',
      price: 50
    },
    {
      id: 6,
      name: 'Gaming Chair',
      price: 70
    }
  ])
  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(5)
  const [warningMessage, setWarningMessage] = useState(null)

  function handleAddToCart(item) {
    if (availableBalance > item.price) {
      const newAvailableItems = availableItems.filter((oneItem) => oneItem.id !== item.id)
      setAvailableItems(newAvailableItems)
      setShoppingCart([...shoppingCart, item])
      setAvailableBalance(availableBalance - item.price)
    } else {
      setWarningMessage('Insufficient funds. Your balance is too low to purchase this item')
    }
  }

  return (
    <div>
      <h1>Zaid's Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <p>{warningMessage}</p>

      <h2>Available Items</h2>
      {availableItems.map((oneItem) => (
        <div key={oneItem.id}>
          <p>{oneItem.name} - {oneItem.price}</p>
          <button onClick={() => { handleAddToCart(oneItem) }}>Add to Cart</button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {shoppingCart.map((oneItem) => (
        <div key={oneItem.id}>
          <p>{oneItem.name} - {oneItem.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
