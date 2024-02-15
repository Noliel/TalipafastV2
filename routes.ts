/* LIST OF THE PUBLIC ROUTES */

export const publicRoutes = [
    "/"
]

/* LIST OF THE AUTHENTICATION */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

export const apiAuthPrefix =  "/api/auth"


/* ITO YUNG  MAIN PAGE IF HINDI NAKA LOG IN  OR KAHIT NAKA LOG IN*/

export const DEFAULT_LOGIN_REDIRECT = "/settings"