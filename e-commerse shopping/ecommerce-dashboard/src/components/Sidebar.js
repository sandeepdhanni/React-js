import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineInventory2 } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <AiOutlineHome />, path: '/' },
    { name: 'Products', icon: <MdOutlineInventory2 />, path: '/products' },
    { name: 'Orders', icon: <AiOutlineShoppingCart />, path: '/orders' },
    { name: 'Users', icon: <AiOutlineUser /> , path: '/users'},
  ];

  return (
    <div className="w-64 h-screen p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-2xl font-bold text-center py-4">E-Commerce Admin</h2>
      <ul className="mt-8 space-y-4">
        {menuItems.map((item) => (
          <li key={item.name} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600">
            <Link to={item.path} className="flex items-center">
              <span className="text-xl mr-4">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
