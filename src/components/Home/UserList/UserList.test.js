import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

test('renders UserList component', () => {
  const { getByText } = render(<UserList />);
  const userListTitle = getByText('User List');
  expect(userListTitle).toBeInTheDocument();
});
