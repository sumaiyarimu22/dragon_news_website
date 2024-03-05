import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className=''>
      {label && (
        <label
          htmlFor={id}
          className='font-semibold text-[20px] text-[#403F3F]'
        >
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role='alert' className='text-rose-600'>
          {error.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};

export default Field;
