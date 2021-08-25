import { render, screen } from '@testing-library/react';
import { Filter } from './Filter';


test('renders filter', () => {
    render(<Filter/>)
    const filtercomp = screen.getByTestId('htfilter');
    expect(filtercomp).toBeInTheDocument();
  });


  test('Menu options', () => {
    render(<Filter/>)
    const filtercomp = screen.getByTestId('htfilter');
    expect(filtercomp.textContent).toBe('Select HeightMore than 100 ftMore than 200 ftMore than 300 ftMore than 400 ft');
  });


  
  