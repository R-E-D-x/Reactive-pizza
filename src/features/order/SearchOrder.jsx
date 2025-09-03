import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (query) navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-90 rounded-2xl border-1 border-amber-950/50 bg-amber-50 p-2 font-medium hover:outline-1 hover:outline-amber-950/50 focus:w-45 max-md:w-40 md:focus:w-100 lg:focus:w-120"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
