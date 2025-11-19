import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { useEffect } from "react";
import { getAllData } from "./src/redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./src/components";

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.data);
  if (loading) {
    return <Loading />;
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
