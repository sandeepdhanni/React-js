   import React from 'react';
   import Sidebar from './components/Sidebar';
   import Header from './components/Header';

   const MainLayout = ({ children }) => {
     return (
       <div className="flex">
         <Sidebar />
         <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
           <Header />
           <div className="p-4">
             {children}
           </div>
         </div>
       </div>
     );
   };

   export default MainLayout;