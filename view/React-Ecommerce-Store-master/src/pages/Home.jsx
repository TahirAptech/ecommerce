import { useContext } from "react";
import {PersonContext} from "../context/noteContext";
import Products from "./Products";

const Home = () => {
  const {counterState, state2} = useContext(PersonContext);
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
              <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS {counterState} {state2}
              </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
