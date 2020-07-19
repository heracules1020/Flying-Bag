import React from "react";
import { useSelector } from "react-redux";
import LuggageItem from "./luggageItem";

const LuggageList = () => {
  const luggageList = useSelector(
    state => state.luggageList,
    () => {}
  );
  // useEffect(() => {
  //   console.log(luggageList);
  // });
  return (
    <div className="w-100 mt-3">
      {luggageList.map((item, index) => {
        return <LuggageItem content={item} index={index} key={index} />;
      })}
    </div>
  );
};
export default LuggageList;
