import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BottomPlayer from '../components/BottomPlayer';
import './DashboardLayout.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__main">
        <Sidebar />
        <div className="dashboard-layout__wrapper">
          <Navbar />
          <div className="dashboard-layout__body">{children}</div>
        </div>
      </div>
      <BottomPlayer />
    </div>
  );
}

export default DashboardLayout;
