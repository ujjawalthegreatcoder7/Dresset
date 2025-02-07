import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Correct import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './LoginSignup/loginpage.jsx';
import AssignOrders from './Assignorders/assignorder.jsx';
import DetailOfcompletedJobs from './detailsofcompletedjobs/detailsofcompletedjob.jsx';
import DetailOfpendingJobs from './detailsofcompletedjobs/pendingjob.jsx';
import AdminLogin from './Admin/adminlogin/adminlogin.jsx';
import PendingComplete from './Admin/pendingcompletedjobs/pendingcomplete.jsx';
import Pickup from './Admin/pickup/pickup.jsx';
import Dropup from './Admin/drop/drop.jsx';
import BothPickDrop from './Admin/bothpickdrop/bothpickdrop.jsx';
import Dropcompleting from './Admin/bothpickdrop/dropupcompleting.jsx';
import Pickupcompleting from './Admin/bothpickdrop/pickupcompleting.jsx';

const root = createRoot(document.getElementById('root'));  // Use createRoot directly

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/radha/assignOrders" element={<AssignOrders />} />
      <Route path="/radha/assignorders/completedjobs/details" element={<DetailOfcompletedJobs />} />
      <Route path="/radha/assignorders/pendingjobs/details" element={<DetailOfpendingJobs />} />

      <Route path="/radha/adminlogin" element={<AdminLogin />} />
      <Route path="/radha/pendingcompletesection" element={<PendingComplete />} />
      <Route path="/radha/pendingcompletesection/proceed" element={<Pickup />} />
      <Route path="/radha/pendingcompletesection/drop" element={<Dropup />} />
      <Route path="/radha/pendingcompletesection/completeddroppickup" element={<BothPickDrop />} />
      
      <Route path="/radha/pendingcompletesection/completing/dropup" element={<Dropcompleting />} />
      <Route path="/radha/pendingcompletesection/completing/pickup" element={<Pickupcompleting />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);


