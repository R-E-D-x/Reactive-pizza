import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
