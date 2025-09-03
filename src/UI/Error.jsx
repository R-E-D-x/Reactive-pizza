import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="grid flex-1 grid-rows-2 place-items-start gap-10">
      <button
        className="ml-2 cursor-pointer rounded-xl bg-amber-400 px-1 py-3 hover:bg-amber-300"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
      <div className="flex flex-col items-center justify-center gap-3 place-self-center">
        <h1 className="text-center text-3xl">Something went wrong 😢</h1>
        <p className="text-center text-xl">{error.data || error.message}</p>
      </div>
    </div>
  );
}

export default Error;
