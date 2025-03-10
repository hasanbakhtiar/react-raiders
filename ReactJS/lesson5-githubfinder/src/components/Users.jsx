import SingleUser from "./SingleUser";

const Users = ({usersdata}) => {
  return (
    <div className="container mt-4">
      <div className="row g-5">
        {usersdata.map((item,index)=>(
        <SingleUser key={index} userProp={item} />
        ))}
      </div>
    </div>
  );
};

export default Users;
