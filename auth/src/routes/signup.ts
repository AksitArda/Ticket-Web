import express from "express";

const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  res.send("Hello signup!");
});

export { router as signupUserRouter };
