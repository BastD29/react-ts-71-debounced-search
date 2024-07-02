// import { FC, useCallback, useEffect, useState } from "react";
// import { getUsers } from "../../services/user2";
// import useDebounce from "../../hooks/useDebounce";
// import { UserType } from "../../models/user2";
// import SearchInput from "../SearchInput/SearchInput";
// import UserList from "../UserList/UserList";
// // import style from "./App.module.scss";

// const App: FC = () => {
//   const [data, setData] = useState<UserType[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   const fetchUsers = useCallback(async () => {
//     setLoading(true);
//     try {
//       const data = await getUsers({ search: debouncedSearchTerm });
//       setData(data);
//     } catch (error) {
//       setError((error as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   }, [debouncedSearchTerm]);

//   useEffect(() => {
//     fetchUsers();
//   }, [fetchUsers]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       {loading && <div>Loading...</div>}
//       {error && <div>Error: {error}</div>}
//       {!loading && !error && <UserList data={data} />}
//     </>
//   );
// };

// export default App;
