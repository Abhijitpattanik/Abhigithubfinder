import { useEffect, useState, useContext } from "react";
import Spinner from "../layout/Spinner";
import Useritem from "./Useritem";
import GithubContext from "../../context/github/GithubContext";

function UserResult() {
  const { users, isloading, fetchUserData } = useContext(GithubContext);
  /**
   * this is one way of fetching and displaying data directly in component
   */
  // const [users, setUserdata] = useState([]);
  // const [isloading, SetLoading] = useState(true);

  /** 
   * used for displaying first 30 user details from API   
   */
  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  /**
   * we can move fetch user details to context to access the data for all the children components
   */
  // const fetchUserData = async () => {
  //   const responce = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //     headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
  //   });
  //   const data = await responce.json();
  //   console.log(data);
  //   setUserdata(data);
  //   SetLoading(false);
  // };

  if (!isloading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
