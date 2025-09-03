import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="text-center max-sm:hidden">
      Welcome, <span className="font-bold">{username}</span>
    </div>
  );
}

export default UserName;
