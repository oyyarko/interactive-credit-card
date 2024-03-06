import React from "react";

export const Input = (props) => {
  const { hideLabel = false } = props;
  return (
    <div className="flex flex-col">
      <label
        className={`block text-sm font-medium uppercase text-amber-800`}
        for={props.name}
      >
        {hideLabel ? null : props.label}
      </label>
      <input
        className="rounded-lg bg-slate-100 border border-amber-800 text-gray-300 text-sm focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5"
        {...props}
      />
    </div>
  );
};  
