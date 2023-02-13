import React from 'react';
import CreateDay from '../../components/CreateDay/CreateDay';
import ListDays from '../../components/ListDays/ListDays';
import Layout from '../../Layout/Layout';

type Props = {};

const Admin = (props: Props) => {
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <div className="container mx-auto pt-4">
        <h2 className="text-2xl">Admin Panel</h2>
        <div className="custom-grid gap-5">
          <CreateDay />
          <ListDays />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
