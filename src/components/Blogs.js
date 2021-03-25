import React from "react";
import RTable from "./Table";
import Layout from "../hoc/Layout";
const columns = [
  { id: "id", label: "ID", minWidth: 130 },
  { id: "title", label: "Title", minWidth: 270 },
  { id: "body", label: "Body", minWidth: 270 },
];

export default function Blogs({ allBlogs }) {
  console.log(allBlogs);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(allBlogs);
  }, [allBlogs]);
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
