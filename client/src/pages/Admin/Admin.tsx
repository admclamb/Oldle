import React, { useState } from 'react';
import CreateDay from '../../components/CreateDay/CreateDay';
import ListDays from '../../components/ListDays/ListDays';
import ErrorAlert from '../../Error/ErrorAlert';
import Layout from '../../Layout/Layout';
import { Error } from '../../ts/types/Error';

type Props = {};

const Admin = (props: Props) => {
  const [error, setError] = useState<Error>({ message: 'ERROR' });
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <ErrorAlert error={error} setError={setError} />
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
