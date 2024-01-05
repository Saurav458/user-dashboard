import React from 'react';
import { render, screen } from '@testing-library/react';
import AddUser from './AddUser';

describe('AddUser component rendering text', () => {
  it('renders Add New User title', () => {
    render(<AddUser setOpenModal={() => {}} openModal={true} setUsers={() => {}} />);
    const addUserTitle = screen.getByText('Add New User');
    expect(addUserTitle).toBeInTheDocument();
  });

  it('renders labels for Name, Email, and Address', () => {
    render(<AddUser setOpenModal={() => {}} openModal={true} setUsers={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Address')).toBeInTheDocument();
  });

  it('renders a Save button', () => {
    render(<AddUser setOpenModal={() => {}} openModal={true} setUsers={() => {}} />);
    // const saveButton = screen.getByU('button', { name: 'Save' });
    const btnRender= screen.getAllByTestId('saveBtn')
    expect(btnRender).toBeInTheDocument();
  });

});
