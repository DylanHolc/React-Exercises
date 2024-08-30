import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";

it('renders in the DOM', () => {
    render(<Card />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});