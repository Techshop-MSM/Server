import router from express;
import { register, login } from ("../controller/userController");

export const registerRouter = router.post('/register', register)
export const loginRouter = router.post("/login", login)