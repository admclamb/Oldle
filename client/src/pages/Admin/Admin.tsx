import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import ErrorAlert from "../../Error/ErrorAlert";
import ListDays from "../../components/ListDays/ListDays";
import dayjs from "dayjs";
type Props = {};

const Admin = (props: Props) => {
  const [error, setError] = useState<any>({});
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <ErrorAlert error={error} setError={setError} />
      <div className="container-sm mx-auto pt-4 flex flex-col gap-4">
        <header>
          <h2 className="text-4xl font-semibold">Admin Panel</h2>
          <p>Todays Date, {dayjs(new Date()).format("MMM-DD-YYYY")}</p>
        </header>

        <ListDays />
      </div>
    </Layout>
  );
};

export default Admin;
