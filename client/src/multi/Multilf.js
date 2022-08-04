/* eslint-disable default-case */
import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Dob } from "./Stepform/Dob";
import { Email } from "./Stepform/Email";
import { Names } from "./Stepform/Names";
import { Password } from "./Stepform/Password";
import { Submit } from "./Stepform/Submit";

export const Multilf = () => {
  const [defaultData, setDefaultData] = useState({
    names: "",
    email: "",
    dob: "",
    Password: "",
    gender: "",
    packages: "",
    Name_of_card: "",
    card_no: "",
    Expiry: "",
    Cvc: "",
  })
  
  const steps = [
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" },
  ];
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
      steps,
      initialStep: 0,
    });
  
    const props = { formData, setForm, navigation };
  
    switch (step.id) {
      case "names":
        return <Names {...props} />;
      case "address":
        return <Email {...props} />;
      case "contact":
        return <Password {...props} />;
      case "review":
        return <Dob {...props} />;
      case "submit":
        return <Submit {...props} />;
    }
  
    return (
      <div>
        <h1>Multi step form</h1>
      </div>
    );
};
