import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const [state, setState] = useState(2);
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const Reset = () => {
    setSearchParams({});
  };

  useEffect(() => {
    // window.alert("useeffect");
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=${userId}`
      );

      const res = await get.json();
      setData(res[0]);
    }
    getData();
  }, []);
  return (
    <>
      <h4>{data.id}</h4>
      <img src={data.imageUrl} />
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default UserDetails;
