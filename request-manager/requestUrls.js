const SERVER_URL = "http://localhost:3003"
const GOOGLE_AUTH = "http://localhost:3003/auth-api/googleAuthentication";
const GITHUB_AUTH = "http://localhost:3003/auth-api/githubAuhentication";
const AUTH_PAGE="http://localhost:3000/Authentication/SignIn";
const CREATE_ADMIN_ACCOUNT="/auth-api/createAdminAccount";
const SIGN_IN_ADMIN_ACCOUNT="/auth-api/loginToAdminAccount";
const VERIFY_JWT_TOKEN="/auth-api/verifyJwtToken";

const LOAD_PENDING_HOSTS_LIST="/host-api/getListOfPendingHostsByAdminId";
const LOAD_CONNECTED_HOSTS_LIST="/host-api/getListOfConnectedHostsByAdminId";

const SET_HOST_STATUS="/host-api/updateHostConnectionStatus"
export {SERVER_URL,SIGN_IN_ADMIN_ACCOUNT,CREATE_ADMIN_ACCOUNT,VERIFY_JWT_TOKEN,GOOGLE_AUTH,GITHUB_AUTH,AUTH_PAGE,LOAD_PENDING_HOSTS_LIST,
    SET_HOST_STATUS,LOAD_CONNECTED_HOSTS_LIST
}