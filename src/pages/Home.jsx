import UserResult from "../components/users/UserResult";
import UserSearch from "../components/users/UserSearch";
import ParentComp from "./ParentComp";
function Home() {
  return (
    // <div>
    //   <h1>Home</h1>
    //   <content>{process.env.REACT_APP_GITHUB_TOKEN}</content>
    // </div>
    <>
      {/* search component  */}
      <UserSearch/>
      <UserResult />
    </>
  );
}

export default Home;
