import React from "react";
import { useLoaderData, useNavigate } from "react-router";

export const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  if (!user) {
    return <p style={{ padding: "20px" }}>ইউজার ডেটা পাওয়া যায়নি।</p>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "16px",
          padding: "8px 14px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          background: "#f9fafb",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h2 style={{ margin: 0, color: "#111827" }}>{user.name}</h2>
        <span style={{ color: "#2563eb", fontWeight: "600" }}>
          @{user.username}
        </span>

        <p style={{ margin: 0 }}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Website:</strong> {user.website}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Address:</strong> {user.address?.street}, {user.address?.suite},{" "}
          {user.address?.city} - {user.address?.zipcode}
        </p>
        <p style={{ margin: 0 }}>
          <strong>Company:</strong> {user.company?.name} (
          {user.company?.catchPhrase})
        </p>
      </div>
    </div>
  );
};