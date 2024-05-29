import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.router";
const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  try {
    const a = 10;

    res.status(200).json(a);
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: "Request is unsuccessfull",
    });
  }
});

export default app;
