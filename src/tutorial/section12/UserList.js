import React from "react";

function User({ user }) {
  const { username, email } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
    </div>
  );
}

export default function UserList({ users, onRemove }) {
  return (
    <div>
      {/* {users.map((user) => {
        <User user={user} key={user.id} />
      })} */}
      {users.map((user) => (
        <>
<User user={user} key={user.id} />
            <button onRemove={onRemove}>삭제</button>
        </>
      ))}
    </div>
  );
}
