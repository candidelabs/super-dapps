import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const customDropdownStyle = {
  background: "linear-gradient(45deg, white, white)",
  width: "300px",
  borderRadius: "10px",
  border: "1px solid black",
  color: "black",
  padding: "5px",
  textDecoration: "none",
  maxHeight: '200px', // Set the maximum height of the dropdown
  overflowY: 'auto',   // Enable vertical scrolling if needed
};

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={customDropdownStyle}
  >
    {children}{" "}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={{...style, ...customDropdownStyle}}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

