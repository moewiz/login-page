import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

import {SidebarWrapper} from "./styled";

const sidebars = [
  {url: '/dashboard', icon: 'dashboard@2x.png', label: 'Dashboard'},
  {url: '/incoming-enq', icon: 'incoming-enq@2x.png', label: 'Incoming Enquiries'},
  {url: '/incoming-qout', icon: 'incoming-qout@2x.png', label: 'Incoming Quotations'},
  {url: '/product', icon: 'product@2x.png', label: 'Products'},
  {url: '/my-request', icon: 'my-request@2x.png', label: 'My Request'},
  {url: '/order', icon: 'order@2x.png', label: 'Order History'},
  {url: '/profile', icon: 'profile@2x.png', label: 'Profile'},
  {url: '/setting', icon: 'setting@2x.png', label: 'Settings'},
];

const CustomLink = ({ to, icon, label, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  const src = '/icons/' + (match ? 'active/' : '') + icon;

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}><img src={src} alt={label} width={20}/>{label}</Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ul>
        {sidebars.map(({url, icon, label}, index) => (
          <li key={index}>
            <CustomLink to={url} label={label} icon={icon} activeOnlyWhenExact={true} />
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
