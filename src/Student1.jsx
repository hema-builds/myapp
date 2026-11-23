import { useParams } from 'react-router-dom';

function Student1() {
  const { id } = useParams();
  return <h2>Student ID: {id}</h2>;
}

export default Student1;