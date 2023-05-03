import React, { useState } from "react";
import CreateDay from "../../components/CreateDay/CreateDay";
import CreatePicture from "../../components/CreatePicture/CreatePicture";
import ListDays from "../../components/ListDays/ListDays";
import ErrorAlert from "../../Error/ErrorAlert";
import Layout from "../../Layout/Layout";
import ListPictures from "../../components/ListPictures/ListPictures";
import { Day } from "../../ts/types/Day";

type Props = {};

const Admin = (props: Props) => {
  const [error, setError] = useState<any>({});
  const [currDay, setCurrDay] = useState<Day | null>(null);
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <ErrorAlert error={error} setError={setError} />
      <div className="container mx-auto pt-4">
        <h2 className="text-2xl">Admin Panel</h2>
        <div className="custom-grid gap-5">
          <div className="flex flex-col gap-3">
            <CreateDay day={currDay} setDay={setCurrDay} />
            <ListDays setCurrDay={setCurrDay} />
          </div>

          <div>
            <ListPictures />
          </div>

          {/* <CreatePicture setError={setError} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
