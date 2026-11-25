 import  { use } from "react";
import { NavLink } from "react-router";

export const Home= ({ promisce }) => {
  const users = use(promisce);

  return (
    <div style={{ padding: "20px", maxWidth: "1100px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "16px" }}>
        Users ({users?.length ?? 0})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {users?.map((user) => (
          <div
            key={user.id}
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#2563eb",
                background: "#eff6ff",
                padding: "2px 8px",
                borderRadius: "999px",
                width: "fit-content",
              }}
            >
              @{user.username}
            </span>

            <h3 style={{ margin: "4px 0 0", fontSize: "18px", color: "#111827" }}>
              {user.name}
            </h3>

            <p style={{ margin: 0, fontSize: "14px", color: "#4b5563" }}>
              <strong>Email:</strong> {user.email}
            </p>

            <p style={{ margin: 0, fontSize: "14px", color: "#4b5563" }}>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p style={{ margin: 0, fontSize: "14px", color: "#4b5563" }}>
              <strong>City:</strong> {user.address?.city}
            </p>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f3f4f6",
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              Company: <strong style={{ color: "#374151" }}>{user.company?.name}</strong>
            </div>

            <NavLink
              to={`/Home/${user.id}`}
              style={{
                marginTop: "8px",
                display: "inline-block",
                textAlign: "center",
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#2563eb",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};