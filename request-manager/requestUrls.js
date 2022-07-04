const SERVER_URL = "http://localhost:3003"
const GOOGLE_AUTH = "http://localhost:3003/auth-api/googleAuthentication";
const GITHUB_AUTH = "http://localhost:3003/auth-api/githubAuhentication";
const AUTH_PAGE="http://localhost:3000/Authentication/SignIn";
const CREATE_ADMIN_ACCOUNT="/auth-api/createAdminAccount";
const SIGN_IN_ADMIN_ACCOUNT="/auth-api/loginToAdminAccount";

const VERIFY_JWT_TOKEN="/auth-api/verifyJwtToken";

export {SERVER_URL,SIGN_IN_ADMIN_ACCOUNT,CREATE_ADMIN_ACCOUNT,VERIFY_JWT_TOKEN,GOOGLE_AUTH,GITHUB_AUTH,AUTH_PAGE}