import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList component rendering text', () => {
  it('renders User List title', () => {
    render(<UserList />);
    const userListTitle = screen.getByText('User List');
    expect(userListTitle).toBeInTheDocument();
  });

  it('renders loading text when no users are available', () => {
    render(<UserList />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

});
