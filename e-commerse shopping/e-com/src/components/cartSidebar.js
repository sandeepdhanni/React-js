// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { List, ListItem, ListItemText, IconButton, Button,Typography, Divider } from '@mui/material';
// import { Delete, Add, Remove } from '@mui/icons-material';
// import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

// const CartSidebar = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   const handleRemoveItem = (id) => {
//     dispatch(removeItem({ id }));
//   };

//   const handleIncreaseQuantity = (id) => {
//     dispatch(increaseQuantity({ id }));
//   };

//   const handleDecreaseQuantity = (id) => {
//     dispatch(decreaseQuantity({ id }));
//   };

//   // Calculate total amount
//   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="w-64 p-4">
//       <List>
//         {cartItems.length === 0 ? (
//           <ListItem>
//             <ListItemText primary="Cart is empty" />
//           </ListItem>
//         ) : (
//           cartItems.map((item) => (
//             <ListItem key={item.id} className="flex justify-between items-center">
//               <ListItemText
//                 primary={item.title}
//                 secondary={`$${(item.price * item.quantity).toFixed(2)} (${item.quantity})`}
//               />
//               <div className="flex items-center">
//                 <IconButton onClick={() => handleDecreaseQuantity(item.id)}>
//                   <Remove />
//                 </IconButton>
//                 <IconButton onClick={() => handleIncreaseQuantity(item.id)}>
//                   <Add />
//                 </IconButton>
//                 <IconButton onClick={() => handleRemoveItem(item.id)}>
//                   <Delete />
//                 </IconButton>
//               </div>
//             </ListItem>
//           ))
//         )}
//       </List>
//       <Divider />
//       <div className="flex justify-between items-center mt-4">
//         <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
//       </div>
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         className="mt-4"
//         onClick={() => alert('Order placed!')}
//       >
//         Place Order
//       </Button>
//     </div>
//   );
// };

// export default CartSidebar;











import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Button, Divider, Typography } from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-90 p-9">
        <h1 className='text-2xl font-bold'>Cart Items</h1>
      <List>
        {cartItems.length === 0 ? (
          <ListItem>
            <ListItemText primary="Cart is empty" />
          </ListItem>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id} className="flex justify-between items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
              <ListItemText
                primary={item.title}
                secondary={`$${(item.price * item.quantity).toFixed(2)} (${item.quantity})`}
              />
              <div className="flex items-center">
                <IconButton onClick={() => handleDecreaseQuantity(item.id)}>
                  <Remove />
                </IconButton>
                <IconButton onClick={() => handleIncreaseQuantity(item.id)}>
                  <Add />
                </IconButton>
                <IconButton onClick={() => handleRemoveItem(item.id)}>
                  <Delete />
                </IconButton>
              </div>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <div className="flex justify-between items-center mt-4">
        <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="mt-4"
        onClick={() => alert('Order placed!')}
      >
        Place Order
      </Button>
    </div>
  );
};

export default CartSidebar;