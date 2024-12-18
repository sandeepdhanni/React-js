import React from 'react';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineInventory2 } from 'react-icons/md';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <AiOutlineHome /> },
    { name: 'Products', icon: <MdOutlineInventory2 /> },
    { name: 'Orders', icon: <AiOutlineShoppingCart /> },
    { name: 'Users', icon: <AiOutlineUser /> },
  ];

  return (
    <div className="w-64 h-screen p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-2xl font-bold text-center py-4">E-Commerce Admin</h2>
      <ul className="mt-8 space-y-4">
        {menuItems.map((item) => (
          <li key={item.name} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600">
            <span className="text-xl mr-4">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
