import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signupUserRouter } from "./routes/signup";
import { signinUserRouter } from "./routes/signin";
import { signoutUserRouter } from "./routes/signout";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupUserRouter);
app.use(signinUserRouter);
app.use(signoutUserRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
