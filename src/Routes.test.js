import { MemoryRouter } from "react-router-dom";
import Routes from "./Routes";
import { render } from "@testing-library/react";

const sampleDogs = [
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

it("renders without crashing", function () {
    render(
        <MemoryRouter>
            <Routes dogs={sampleDogs} />
        </MemoryRouter>
    )
})

it("matches snapshot", function () {
    const { container } = render(
        <MemoryRouter>
            <Routes dogs={sampleDogs} />
        </MemoryRouter>
    )
    expect(container).toMatchSnapshot();
})

it("can show all dogs", function () {
    const { getByText } = render(
        <MemoryRouter initialEntries={["/dogs"]}>
            <Routes dogs={sampleDogs} />
        </MemoryRouter>
    )
    const titleText = getByText(/testDog1/i);  // QUESTION: what is this slash thing?????
    // debug(titleText);
    const titleText2 = getByText(/testDog2/i);

    expect(titleText).toBeInTheDocument();
    expect(titleText2).toBeInTheDocument();

})


it("can show an idividual dog", function () {
    const { container, getByText } = render(
        <MemoryRouter initialEntries={["/dogs/testdog1"]}>
            <Routes dogs={sampleDogs} />
        </MemoryRouter>
    )
    const titleText = getByText(/testDog1/i);  // QUESTION: what is this slash thing?????
    // debug(titleText);
    const ageText = getByText(/age: 2/i);

    // debug(container)
    const lists = container.querySelectorAll("li")

    expect(titleText).toBeInTheDocument();
    expect(ageText).toBeInTheDocument();
    expect(lists).toHaveLength(2);

})