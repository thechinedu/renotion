import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: "The access token",
      })
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "John Doe",
        email: "test@example.com",
      })
    );
  }),
];
