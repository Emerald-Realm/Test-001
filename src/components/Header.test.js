import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header'


describe('header component', () => {
    
    test('renders well', () => {
        const { getByTestId } = render(<Header />)
        const wrapper = getByTestId('header-tag')
        expect(wrapper).toBeInTheDocument()
    })
    
})