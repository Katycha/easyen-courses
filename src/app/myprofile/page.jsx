/*"use client";
import React, { useState } from "react";

const MyProfile = () => {
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Здесь вы можете отправить данные на сервер для обновления профиля
    try {
      // Ваш код обновления профиля
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MyProfile;*/
