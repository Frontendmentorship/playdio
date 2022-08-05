import React from 'react';
import OnboardInput from '../../components/OnboardInput';
import DashboardLayout from '../../layouts/DashboardLayout';

function Home() {
  return (
    <DashboardLayout>
      <div>
        Home Page
        <OnboardInput label="Password" />
      </div>
    </DashboardLayout>
  );
}

export default Home;
