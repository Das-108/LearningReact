import React from 'react';
import './App.css';

export default function UserCard({ name, email, children }) {
  return (
    <div className="user-card">
      <div className="user-card__profile">
        {/* Placeholder avatar using the initials */}
        <div className="user-card__avatar">
          {name ? name.charAt(0).toUpperCase() : '?'}
        </div>
        <div className="user-card__info">
          <h3 className="user-card__name">{name}</h3>
          <p className="user-card__email">{email}</p>
        </div>
      </div>
      
      {/* Action row powered by the children prop */}
      {children && (
        <div className="user-card__actions">
          {children}
        </div>
      )}
    </div>
  );
}

