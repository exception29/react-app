import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/spacex rocket encyclopedia/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders backgroundimage', () => {
  render(<App/>);
  const body = document.body;
  const url ="https://wallpaperaccess.com/full/473028.jpg"
 
  expect(body).toHaveStyle({backgroundColor: {url}});
});

