import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../tests-utils";
import UserCard from "./UserCard";
import { User } from "../../features/users/redux/usersTypes";

describe('UserCard component', () => { 
    const mockUser:User = {
            id: '1',
            name: "John Doe",
            city: "New York",
            phone: "1234567890",      
            email: "john@test.com",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
        };
    test('should first', () => { 
        renderWithProviders(<UserCard user={mockUser}/>);
        expect(screen.getByText(/john doe/i)).toBeInTheDocument();
        expect(screen.getByText("New York")).toBeInTheDocument();
        expect(screen.getByText(/1234567890/i)).toBeInTheDocument();
        expect(screen.getByText(/john@test.com/i)).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src","https://randomuser.me/api/portraits/men/1.jpg")
    })
})