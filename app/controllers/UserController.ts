import express, { Response, Request } from "express";
import { BaseController } from "../types";
import User from "../models/User";

export default class UserController extends BaseController {
  public path = "/users";
  public router = express.Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  public initializeRoutes = () => {
    this.router.get("/", this.get);
  };

  public async get(req: Request, res: Response) {
    try {
      const users = await User.find();

      return res.json(users || []);
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  }
}
