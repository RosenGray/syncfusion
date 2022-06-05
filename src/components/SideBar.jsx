import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

console.log('links', links);
const SideBar = () => {
  const activeMenu = true;
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const renderLinks = () => {
    return links.map((item) => {
      const { title, links: _links } = item;
      return (
        <div key={title}>
          <p className="text-gray-400 m-3 mt-4 uppercase">{title}</p>
          {_links.map((link) => {
            const { name, icon } = link;
            return (
              <NavLink
                to={`/${name}`}
                key={name}
                onClick={() => console.log(123)}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {icon}
                <span className="capitalize">{name}</span>
              </NavLink>
            );
          })}
        </div>
      );
    });
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              to="/"
              onClick={() => {
                alert(123);
              }}
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent position="BottomCenter" content="Menu">
              <button
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                type="button"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">{renderLinks()}</div>
        </>
      )}
    </div>
  );
};

export default SideBar;
