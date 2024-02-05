// configs
import {render, screen} from '@testing-library/react'
import { describe } from 'node:test'

// components
import LoginForm from '@/components/login-form'

describe('LoginForm', () => {
  it('render the login form', () => {
    render(<LoginForm />)

    const form = screen.getByRole('form')

    expect(form).toBe
  })
})