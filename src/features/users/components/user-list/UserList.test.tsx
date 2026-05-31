import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../../tests-utils";
import UserList from "./UserList";
import { server } from "../../../../mocks/server";
import { rest } from "msw";

describe('UserList component', () => { 
    test('renders loading initially', () => { 
        renderWithProviders(<UserList/>);
        const loadingElement= screen.getByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
     })

     test('renders fetched users', async() => { 
        renderWithProviders(<UserList/>);
        const userList= await screen.findAllByRole("listitem");
        expect(userList.length).toBeGreaterThan(1);
        expect(userList).toHaveLength(2);
        expect(await screen.findByText(/john doe/i)).toBeInTheDocument();
        expect(await screen.findByText(/jane smith/i)).toBeInTheDocument();
      })

      test('renders error on fetch users failure ', async() => { 
         server.use(
            rest.get(`https://randomuser.me/api/`,(req,res,ctx)=>{
                return res(
                    ctx.status(500),
                    ctx.json({
                        message:"Server Error"
                    })
                )
            }) 
         )
         renderWithProviders(<UserList/>);
         const errorElement=await screen.findByText(/Failed to fetch users/i);
         expect(errorElement).toBeInTheDocument();

       })
 })