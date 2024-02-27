import React, { useState } from "react";
import CheckInput from "../../components/Input Components/CheckInput";
import Inputbox from "../../components/Input Components/Inputbox";
import MessageBox from "../../components/Input Components/MessageBox";
import RadioInput from "../../components/Input Components/RadioInput";
const Test = () => {
  const [state, setState] = useState("");

  function handleState(value) {
    setState(value);
  }

  return (
    <div className="min-h-[500px] flex flex-col  items-center justify-center bg-slate-50 ">
      Test
      <Inputbox
        id="name"
        label="Name"
        type="text"
        value={state}
        placeholder={"Enter Your Text"}
        handleValue={handleState}
      />
      <Inputbox
        id="name"
        label="Email"
        type="email"
        value={state}
        placeholder={"Enter Your Text"}
        handleValue={handleState}
      />
      <MessageBox
        id="name"
        label="Message"
        type="text"
        value={state}
        placeholder={"Enter Your Text"}
        handleValue={handleState}
      />

      <RadioInput.RadioGroup 
      label="Gender"

      >

      <RadioInput
        id="male"
        name="Gender"
        label="Male"
        type="text"
        value={state}
        handleValue={handleState}
      />
      <RadioInput
        id="female"
        name="Gender"
        label="Female"
        type="text"
        value={state}
        handleValue={handleState}
      />

      </RadioInput.RadioGroup>
      

      <CheckInput.CheckGroup label="Vehicles">

      <CheckInput
        id="car"
        name="Vehicle"
        label="Male"
        type="text"
        value={state}
        handleValue={handleState}
      />
      <CheckInput
        id="cycle"
        name="Vehicle"
        label="Female"
        type="text"
        value={state}
        handleValue={handleState}
      />

      </CheckInput.CheckGroup>


    </div>
  );
};

export default Test;
