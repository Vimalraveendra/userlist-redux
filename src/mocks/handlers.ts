import {rest} from "msw";


export const mockResult=[
                {
                  id:{ value: '1' },
                  name: { first: "John", last: "Doe" },
                  email: "john@test.com",
                  phone: "1234567890",
                  location: { city: "New York" },
                  picture: { large: "https://randomuser.me/api/portraits/men/1.jpg" }
                },
                {
                  id:{ value: '2' },
                  name: { first: "Jane", last: "Smith" },
                  email: "jane@test.com",
                  phone: "0987654321",
                  location: { city: "Los Angeles" },
                  picture: { large: "https://randomuser.me/api/portraits/women/1.jpg" }
              },
          ]

export const handlers =[
    rest.get(`https://randomuser.me/api/`,(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json({
                result:mockResult
            })
        )
    })
]