import { Router } from "express";
import { usermanagementrouter } from "./controllers/router.js";
export const router: Router = Router()

router.use('',usermanagementrouter)