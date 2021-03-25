import React from "react";
import Layout from "../hoc/Layout";
import RTable from "./Table";
const columns = [
  { id: "id", label: "ID", minWidth: 30 },
  { id: "username", label: "Username", minWidth: 70 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "website", label: "Website", minWidth: 70 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "company.name", label: "Company", minWidth: 70 },
  {
    id: "address.city",
    label: "City",
    minWidth: 100,
  },
  {
    id: "address.street",
    label: "Street",
    minWidth: 100,
  },
  {
    id: "address.zipcode",
    label: "ZipCode",
    minWidth: 70,
  },
];

export default function Home(props) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(props.allusers);
  }, [props.allusers]);
  return (
    <Layout>
      <RTable
        columns={columns}
        data={data}
        // loading={loading}
        // handleFetchData={(rowsPerPage) =>
        //   dispatch(callGetRideHistory(rowsPerPage))
        // }
      />
    </Layout>
  );
}
