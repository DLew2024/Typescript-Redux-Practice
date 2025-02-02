import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypeSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((item) => <div key={item}>{item}</div>)}
      </div>
    </div>
  );
};

export default RepositoriesList;
