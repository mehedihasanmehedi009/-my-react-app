
import { useLoaderData } from "react-router";

export const User = () => {
  const users = useLoaderData(); 

  return (
    <div>
      <h1>User List ({users?.length ?? 0})</h1>

      {users?.map((user) => (
        <div key={user.id} style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company?.name}</p>
        </div>
      ))}
    </div>
  );
};