import { useAppselector } from "./redux/hooks";

const NewComponent = () => {
  const count = useAppselector((state) => state.counter.value);
  return <div>{count}</div>;
};

export default NewComponent;
