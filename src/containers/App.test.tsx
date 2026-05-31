import { screen } from "@testing-library/react";
import { renderWithProviders } from "../tests-utils";
import App from "./App";

describe("App component",()=>{
    test("renders heading correctly",()=>{
        renderWithProviders(<App/>);
        const headingElement=screen.getByRole("heading",{name:/user list/i});
        expect(headingElement).toBeInTheDocument();
    })
})