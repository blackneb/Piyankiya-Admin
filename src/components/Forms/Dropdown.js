import { useState } from "react";
import '../styles/style.css'

const Dropdown = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, value, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
        <div className="formInput">
          <label>{label}</label>
          <select
            {...inputProps}
            value={props.value}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
          >
            <option value="" disabled selected hidden>Please Choose...</option>
            <option>{props.inone}</option>
            <option>{props.intwo}</option>
          </select>
          <span>{errorMessage}</span>
        </div>
      );

}

export default Dropdown
