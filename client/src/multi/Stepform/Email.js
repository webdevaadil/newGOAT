import React from "react";
import "./Email.css";
export const Email = ({ formData, setForm, navigation }) => {
  function handle(e) {
   setForm(e)
   navigation.next()
}

  return (
    <section>
      <div className="container">
        <h1 className="main_head">Packages</h1>
        <div className="flex_box">
          <div className="box_one">
            <h2>Pub Punters</h2>
            <h3>Free</h3>
            <button className="b1-btn_one">78% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"Free"}
              onClick={handle}
            >
              Select
            </button>
          </div>

          <div className="box_one">
            <h2>Bronze</h2>
            <h3>$15 / week</h3>
            <button className="b2-btn_one">98% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"$15 / week"}
                
                onClick={handle}
            >
              Select
            </button>
          </div>
          <div className="box_one">
            <h2>Silver</h2>
            <h3>$30 / week</h3>
            <button className="b3-btn_one">120% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"$30 / week"}
              onClick={handle}
            >
              Select
            </button>
          </div>
          <div className="box_one">
            <h2>Gold</h2>
            <h3>$45 / week</h3>
            <button className="b4-btn_one">165% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"$45 / week"}
              onClick={handle}
            >
              Select
            </button>
          </div>
          <div className="box_one">
            <h2>Platinum</h2>
            <h3>$60 / week</h3>
            <button className="b5-btn_one">265% Returns</button>
            <ul className="list_item">
              <li>1234 Users</li>
              <li>234 Tips sent</li>
              <li>Recommended tips</li>
              <li>Recommended tips</li>
            </ul>
            <button
              className="btn_two"
              name="packages"
              value={"$60 / week"}
              onClick={handle}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
