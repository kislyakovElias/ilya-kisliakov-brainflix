import Header from "../Header/Header";
import "./Base.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Base() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <h1>Page doesn't exist</h1>
    </>
  );
}

export default Base;
