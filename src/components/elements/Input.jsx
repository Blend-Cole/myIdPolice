export function Input({ type, ...props }) {

  return (
    <div className="md:flex md:items-center mt-4">
      <div className="w-1/3">
        <label
          className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          {props.placeholder}
        </label>
      </div>
      <div className="w-2/3">
        <input className="w-full h-10 md:pl-2" {...props} type={type} />
      </div>
    </div>
  );
}
