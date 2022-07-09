const SERVER_URL = "http://localhost:3003"
const GOOGLE_AUTH = "http://localhost:3003/auth-api/googleAuthentication";
const GITHUB_AUTH = "http://localhost:3003/auth-api/githubAuhentication";
const AUTH_PAGE="http://localhost:3000/Authentication/SignIn";
const CREATE_ADMIN_ACCOUNT="/auth-api/createAdminAccount";
const SIGN_IN_ADMIN_ACCOUNT="/auth-api/loginToAdminAccount";
const VERIFY_JWT_TOKEN="/auth-api/verifyJwtToken";
const LOAD_PENDING_HOSTS_LIST="/host-api/getListOfPendingHostsByAdminId";
const LOAD_CONNECTED_HOSTS_LIST="/host-api/getListOfConnectedHostsByAdminId";
const SET_STATUS_OF_HOST_ACCESS_URL="/host-accessUrl-api/setStatusOfHostAccessUrl";
const LOAD_LIST_OF_SERVICE_PROVIDERS="/consumer-api/getListOfServiceProviders";
const MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN="/consumer-api/makeConnectionRequestToAdmin";
const SET_HOST_STATUS="/host-api/updateHostConnectionStatus"

export {SERVER_URL,SIGN_IN_ADMIN_ACCOUNT,CREATE_ADMIN_ACCOUNT,VERIFY_JWT_TOKEN,GOOGLE_AUTH,GITHUB_AUTH,AUTH_PAGE,LOAD_PENDING_HOSTS_LIST,
    SET_HOST_STATUS,LOAD_CONNECTED_HOSTS_LIST,SET_STATUS_OF_HOST_ACCESS_URL,LOAD_LIST_OF_SERVICE_PROVIDERS,MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN
}