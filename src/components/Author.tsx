import React from 'react';
interface AuthorProps {
  author: string;
}
let load = false
export function Author({ author }: AuthorProps) {
  const [user, SetUser] = React.useState<any>()
  if (!load) {
    fetch(`https://landing.doras.to/api/get/${author}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json()).then(json => {
        SetUser(json)
      })
  }
  load = true
  if (!user) {
    return <div>Author not found</div>;
  }
  return (
    <div>
      <span>Written by</span>
      <a target='_blank' href={"https://doras.to/" + user.username}>
        <div className='flex items-center not-content gap-3'>
          <img className='rounded-full w-10 h-10' src={user.pic} alt={user.username} />
          <h4 className='items-center'>{user.displayname}</h4>
        </div>
      </a>
    </div>
  );
}