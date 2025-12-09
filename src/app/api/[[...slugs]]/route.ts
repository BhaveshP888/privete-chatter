import { Elysia} from "elysia";

const app = new Elysia({ prefix: "/api" }).get("/user", {
  user: { name: "Bhavesh" },
});

export type app = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;
