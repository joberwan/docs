import { authors } from '../../authors';

interface AuthorProps {
  author: string;
}

export function Author({ author }: AuthorProps) {
  const selectedAuthor = authors.find((a) => a.name === author);

  if (!selectedAuthor) {
    return <div>Author not found</div>;
  }

  return (
    <div>
      <span>Written by</span>
      <a href={selectedAuthor.dorasURL}>
    <div className='flex items-center not-content gap-3'>
      <img className='rounded-full w-10 h-10' src={selectedAuthor.image} alt={selectedAuthor.name} />
      <h4 className='items-center'>{selectedAuthor.name}</h4>
    </div>
    </a>
    </div>
  );
}