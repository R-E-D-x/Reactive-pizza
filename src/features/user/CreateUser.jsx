import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate, useNavigation } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

function CreateUser() {
  const [localName, setLocalName] = useLocalStorage('name', '');
  const [username, setUsername] = useState(localName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const globalUsername = useSelector((state) => state.user.username);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    setLocalName(username);
    navigate('/menu');
  }
  if (navigation.state !== 'idle')
    return <p className="mb-3 text-2xl">Welcome, {globalUsername}</p>;
  return (
    <form onSubmit={handleSubmit}>
      {globalUsername ? (
        <p className="mb-3 text-2xl">Welcome, {globalUsername}</p>
      ) : (
        <div>
          <p>👋 Welcome! Please start by telling us your name:</p>

          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-3 rounded-2xl border-2 px-3 py-1 text-xl"
          />
        </div>
      )}
      <div>
        <button
          disabled={!username && !globalUsername}
          className="cursor-pointer rounded-xl border-1 border-amber-700 bg-amber-100 p-2 py-1 text-xl text-amber-700 transition-all hover:border-amber-700 hover:bg-amber-700 hover:text-amber-50 hover:not-disabled:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Start ordering
        </button>
      </div>
    </form>
  );
}

export default CreateUser;
