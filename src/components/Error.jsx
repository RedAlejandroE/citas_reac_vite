// eslint-disable-next-line react/prop-types
const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-white text-center font-bold rounded-t px-4 py-2 mb-5">
      <p>{children}</p>
    </div>
  );
};

export default Error;
