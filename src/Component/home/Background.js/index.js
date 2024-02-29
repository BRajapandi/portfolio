import { useEffect, useState } from "react";
import Wrapper from "./BgStyle";
function Index() {
  const [obj1, setObj1] = useState({ x: 1, y: 1, scale: 1 });
  const [obj2, setObj2] = useState({ x: 1, y: 1, scale: 1 });
  const [obj3, setObj3] = useState({ x: 50, y: 50, scale: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setObj1({
        x: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        y: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        scale: Math.random() * 5,
      });
      setObj2({
        x: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        y: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        scale: Math.random() * 5,
      });
      setObj3({
        x: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        y: Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10),
        scale: Math.random() * 5,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    console.log("obj3", obj1, obj2, obj3);
  }, [obj3]);

  return (
    <Wrapper obj1={obj1} obj2={obj2} obj3={obj3}>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
}
export default Index;
