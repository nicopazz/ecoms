import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container">
          {/* Logo and links section*/}
          <div>
            <a
              href="#"
              className="text-primary 
          font semibold tracking-widest
          text-2xl uppercase sm: text-3xl"
            >
              ecoms
            </a>
            {/* Menu items */}
            <div>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
