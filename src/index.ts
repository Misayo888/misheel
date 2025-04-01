import dotenv from 'dotenv';
import router from './routes';
import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', router);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: "Bad request" });
    } else if (err instanceof ReferenceError) {
      res.status(500).json({ error: "Internal server error" });
    } else if (err instanceof TypeError) {
      res.status(400).json({ error: "Bad request" });
    } else if (err instanceof RangeError) {
      res.status(400).json({ error: "Bad request" });
    } else if (err instanceof EvalError) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      next(err);
    }
  });
  

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: "Internal server error" });
  });


const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
