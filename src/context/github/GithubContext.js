import { createContext, useState, useReducer } from "react";
import githubreducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  /**
   * use state basically used without using reducer
   * with reducer we have initial state to handle these scenarios
   */
  // const [users, setUserdata] = useState([]);
  // const [isloading, SetLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    isloading: false,
  };

  const [state, dispatch] = useReducer(githubreducer, initialState);

  /**
   * get initial user details
   */
  const fetchUserData = async () => {
    setLoading();
    const responce = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    const data = await responce.json();
    console.log(data);
    // with reducer we need below lines
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    // without reducer we need below 2 lines
    // setUserdata(data);
    // SetLoading(false);
  };

  /**
   * get search results
   * @param {input search data} text
   */
  const searchUserData = async (text) => {
    setLoading();
    const serchQueryParams = new URLSearchParams({
      q: text,
    });
    const responce = await fetch(
      `${GITHUB_URL}/search/users?${serchQueryParams}`,
      {
        headers: { Authorization: `token ${GITHUB_TOKEN}` },
      }
    );
    const { items } = await responce.json();
    //console.log(items);
    // with reducer we need below lines
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
    // without reducer we need below 2 lines
    // setUserdata(data);
    // SetLoading(false);
  };

  /**
   * get search results for perticular user
   * @param {input search data} id
   */
  const selectedUser = async (login) => {
    setLoading();

    const responce = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    if (responce.status === 404) {
      window.location = "/notfound";
    } else {
      const item = await responce.json();
      dispatch({
        type: "GET_USER",
        payload: item,
      });
    }
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  const clearUserData = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  return (
    // without using reducer
    // <GithubContext.Provider
    //   value={{
    //     users,
    //     isloading,
    //     fetchUserData,
    //   }}
    // >
    //   {children}
    // </GithubContext.Provider>
    // with reducer testing
    <GithubContext.Provider
      value={{
        ...state,
        fetchUserData,
        searchUserData,
        clearUserData,
        selectedUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
