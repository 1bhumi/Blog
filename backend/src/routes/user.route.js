import {Router} from 'express';
import { signup, login, currentUser, logout } from '../controllers/user.controller.js';
import authentication from '../middlewares/auth.middleware.js';
const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/current-user").get(authentication,currentUser)

router.route("/logout").post(authentication, logout)

export default router;