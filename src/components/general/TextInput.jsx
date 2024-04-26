import {forwardRef} from 'react';
import PropsType from 'prop-types';

export const TextInput = forwardRef(function TextInput(
  {placeholder, label, errors, disabled, ...other},
  ref
) {
  const {name} = other;
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="text-primary text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={label}
        placeholder={placeholder}
        {...other}
        disabled={disabled}
        className={`border-[1px] disabled:bg-slate-200 border-primary text-primary text-sm placeholder:text-primary p-2 focus:outline-none`}
      />
      {errors[name]?.message && (
        <div className="text-red-500 text-xs" id="error">
          {errors[name]?.message}
        </div>
      )}
    </div>
  );
});

TextInput.propTypes = {
  disabled: PropsType.bool,
  label: PropsType.string,
  placeholder: PropsType.string,
  errors: PropsType.object,
  other: PropsType.any,
};
