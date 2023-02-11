import Sections from "components/sections";
import TableUser from "components/tableUser";
import { useEffect, useState } from "react";
import { getRandomUser } from "services/apiServices";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [cNational, setNational] = useState(0);
  const [mostGender, setMostGender] = useState("");
  const [avgAge, setAvgAge] = useState(0);
  const [avgMembership, setAvgMembership] = useState(0);

  const fetchUser = async () => {
    const data = await getRandomUser();
    if (data) {
      let womanGender = [];
      let manGender = [];
      let age = [];
      let dateRegisted = [];
      const uniqueNat = data.filter(
        (v, i, a) => a.findIndex((v2) => v2.nat === v.nat) === i
      );
      for (const val of data) {
        dateRegisted.push(2023 - parseInt(val.registered.date));
        if (val.gender === "male") {
          manGender.push(val.gender);
        } else {
          womanGender.push(val.gender);
        }
        age.push(val.dob.age);
      }
      const fetchAvgAge = age.reduce((a, b) => a + b, 0) / data.length;
      const fetchAvgDateRegistered =
        dateRegisted.reduce((a, b) => a + b, 0) / data.length;
      if (womanGender.length > manGender.length) {
        setMostGender("female");
      } else {
        setMostGender("male");
      }
      setAvgMembership(parseInt(fetchAvgDateRegistered));
      setAvgAge(parseInt(fetchAvgAge));
      setNational(uniqueNat.length);
    }
    setUsers(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="mx-5 mt-6">
      <p className="font-bold text-sm">Member Dashboard</p>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Sections
          content={cNational}
          title="Different Nationality"
          icon="https://cdn-icons-png.flaticon.com/512/94/94182.png?w=740&t=st=1676129345~exp=1676129945~hmac=ae9a3ed16ff5ab707881c9d8aa9f4b7f3ad38e88fb8a1bdc1275ca1cbf7fac45"
        />
        <Sections
          content={mostGender}
          title="Most Gender"
          icon={
            mostGender === "male"
              ? "https://cdn-icons-png.flaticon.com/512/100/100495.png?w=740&t=st=1676132455~exp=1676133055~hmac=f6506f898086f3a9aea9eb60a61919323099c26074bbb772e19ca08aad2e05b8"
              : "https://cdn-icons-png.flaticon.com/512/44/44964.png?w=740&t=st=1676129301~exp=1676129901~hmac=ff000788d7628ec0d6b45656c1e225aed648a3a56cb18274a704ac08bc7acf50"
          }
        />
        <Sections
          content={avgAge}
          title="Average Age"
          icon="https://img.freepik.com/free-icon/running-man_318-1564.jpg?w=740&t=st=1676129372~exp=1676129972~hmac=5dff12473d9935a24abbcdcde4e95c37863be8a43fe3cff83f25563e076db510"
        />
        <Sections
          content={`~${avgMembership} year`}
          title="Average Membership"
          icon="https://cdn-icons-png.flaticon.com/512/20/20697.png?w=740&t=st=1676129401~exp=1676130001~hmac=3d2e06a58f5d426d1bcf2ec081736b14147b98f34cdd3df068006d41ea950df0"
        />
      </div>
      <div className="mt-5 mx-3">
        <TableUser userData={users} />
      </div>
    </div>
  );
}

export default App;
