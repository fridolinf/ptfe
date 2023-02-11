import React from "react";

const TableUser = ({ userData }) => {
  return (
    <div className="w-full">
      {userData &&
        userData.map((data, i) => (
          <div key={i} className="grid  grid-cols-6 my-4 items-center">
            <div>
              <img
                src={data.picture.thumbnail}
                className="rounded-full"
                alt={data.name.first}
              />
            </div>
            <div>
              <p>
                {data.name.title} {data.name.first} {data.name.last}
              </p>
              <p>{data.email}</p>
            </div>
            <div>
              <p className="text-center">{data.dob.age}</p>
            </div>
            <div
              className={`${
                data.gender === "male" ? "bg-blue-200" : "bg-pink-400"
              } w-fit h-fit px-2 rounded-md text-white font-bold text-sm`}
            >
              {data.gender}
            </div>
            <div>
              <img
                className="w-10"
                src={`https://flagcdn.com/${data.nat.toLocaleLowerCase()}.svg`}
                alt={data.nat}
              />
            </div>
            <div>
              {data.location.street.name} {data.location.postcode},{" "}
              {data.location.city},{data.location.country}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableUser;
