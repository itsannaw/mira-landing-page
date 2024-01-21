import { useRef } from "react";
import { useOverlapping } from "../hooks/useOverlapping";

const OverlapWrapper = ({ children, itemClass, endItemClass }) => {
  const wrapperRef = useRef();

  useOverlapping(wrapperRef, itemClass, endItemClass);

  return (
    <div ref={wrapperRef} className="mb-[650px]">
      {children}
    </div>
  );
};

export default OverlapWrapper;
