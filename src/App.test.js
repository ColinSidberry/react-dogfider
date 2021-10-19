import axios from "axios";
axios.get = jest.fn();
import App from './App';
import { render, waitFor, screen } from "@testing-library/react";

// jest.mock("axios");

test('renders initial state', () => {
  axios.get.mockResolvedValueOnce({
    data: [
      {
        name: "testDog1",
        src: "testDog1",
        age: 2,
        facts: ["barks", "eats"]
      },
      {
        name: "testDog2",
        src: "testDog2",
        age: 2,
        facts: ["plays", "barks"]
      }]
  });
  const { debug, container, getByText } = render(<App />);
  // debug(container)
  const text = getByText(/Loading/i)
  expect(text).toBeInTheDocument();
});


test('renders after fetching data', async () => {
  jest.clearAllMocks();
  axios.get.mockResolvedValueOnce({
    data: [
      {
        name: "testDog1",
        src: "testDog1",
        age: 2,
        facts: ["barks", "eats"]
      },
      {
        name: "testDog2",
        src: "testDog2",
        age: 2,
        facts: ["plays", "barks"]
      }]
  });

  const { findByText, container, debug } = render(<App />);
  const heading = await waitFor(() => screen.findByText("Hello"));
  // debug(container);

  // const text = getByText(/Loading/i)
  expect(heading).toBeInTheDocument();
});