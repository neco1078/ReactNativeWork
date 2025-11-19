import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { useEffect } from "react";
import { getAllData } from "./src/redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./src/components";
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const App = () => {
  const dispatch = useDispatch();
  const { loading, isSaved } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllData());
  }, [isSaved]);
  if (loading) {
    return <Loading />;
  }
  return <RootNavigation />;
};

export default AppWrapper;
