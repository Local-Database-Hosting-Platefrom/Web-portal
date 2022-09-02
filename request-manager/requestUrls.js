// const SERVER_URL = "http://localhost:3003"
// const GOOGLE_AUTH = "http://localhost:3003/auth-api/googleAuthentication";
// const GITHUB_AUTH = "http://localhost:3003/auth-api/githubAuhentication";
// const AUTH_PAGE="http://localhost:3000/Authentication/SignIn";

import { BACK_END_BASE_URL, FRONT_END_BASE_URL } from "./urls";

const GOOGLE_AUTH = `${BACK_END_BASE_URL}/auth-api/googleAuthentication`;
const GITHUB_AUTH = `${BACK_END_BASE_URL}/auth-api/githubAuhentication`;
const AUTH_PAGE = `${FRONT_END_BASE_URL}/Authentication/SignIn`;
const NO_INTERNET_CONNECTION=`${FRONT_END_BASE_URL}/error-in-connecting`;
const CREATE_ADMIN_ACCOUNT = "/auth-api/createAdminAccount";
const SIGN_IN_ADMIN_ACCOUNT = "/auth-api/loginToAdminAccount";
const VERIFY_JWT_TOKEN = "/auth-api/verifyJwtToken";
const LOAD_PENDING_HOSTS_LIST = "/host-api/getListOfPendingHostsByAdminId";
const LOAD_CONNECTED_HOSTS_LIST = "/host-api/getListOfConnectedHostsByAdminId";
const SET_STATUS_OF_HOST_ACCESS_URL =
  "/host-accessUrl-api/setStatusOfHostAccessUrl";
const LOAD_LIST_OF_SERVICE_PROVIDERS =
  "/consumer-api/getListOfServiceProviders";
const LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID =
  "/web-api/getListOfDevelopersRequestsByAdminId";
const LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID =
  "/web-api/getListOfDevelopersAccountsByAdminId";

const MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN =
  "/consumer-api/makeConnectionRequestToAdmin";
const LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID =
  "/consumer-api/getListOfActiveHostsByDeveloperId";

const SET_HOST_STATUS = "/host-api/updateHostConnectionStatus";

const UPDATE_DEV_ADMIN_CON_STATUS = "/web-api/updateStatusOfDevConReq";

const GENERATE_HOST_ACCESS_URL_TOKEN =
  "/consumer-api/generateTokenForDeveloper";

const LOAD_LIST_OF_DENIED_REQUESTS =
  "/web-api/getListOfDeniedRequestsByAdminId";
const LOAD_LIST_OF_RESOLVED_REQUESTS =
  "/web-api/getListOfResolvedRequestsByAdminId";
const LOAD_LIST_OF_ALL_HOSTS = "/web-api/getHostsByAdminId";

const TEST_HOST_ACCESS_URL = "/web-api/testHostAccessUrl";

const STORE_REMOTE_DATABASE_ENDPOINT = "/web-api/createRemoteDatabaseEndpoint";

const LOAD_LIST_OF_REMOTE_DATABASE_URLS =
  "/web-api/getListOfRemoteDatabaseAccessUrlsByAdminId";

const SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL =
  "/web-api/updateRemoteDbAccessUrlStatus";

const DELETE_REMOTE_DATABASE_ENDPOINT = "/web-api/removeRemoteDatabaseQuery";

const GENERATE_AND_UPDATE_APIKEY = "/consumer-api/generateAndUpdateAPIKey";

const MAKE_PAYMENT_REQUEST = "/web-api/makePayment";

const LOAD_LIST_OF_REMOTE_ENDPOINTS =
  "/consumer-api/getListOfAllRemoteDatabaseEndpointsByDeveloperId";

const UPDATE_REMOTE_DB_URL_VISIBILITY =
  "/web-api/updateRemoteDbAccessUrlVisibility";

const LOGIN_TO_ACCOUNT = "/auth-api/loginToAccount";

const GET_UNIQUE_ID = "/auth-api/getUniqueId";

const SEND_PASSWORD_RESET_LINK = "/auth-api/resetMyAccountPassword";

const DELETE_ACCOUNT = "/auth-api/deleteAccount";

const TERMITE_ALL_URLS = "/auth-api/terminateAllUrlByAdminId";

const GET_TOTAL_NUMBER_OF_DEVELOPERS_ADMIN =
  "/web-api/getTotalNumberOfConnectedDevelopersByAdminId";
const GET_TOTAL_NUMBER_OF_HOSTS_ADMIN =
  "/web-api/getTotalNumberOfConnectedHostsByAdminId";
const GET_TOTAL_NUMBER_OF_OPEN_APIS_ADMIN =
  "/web-api/getTotalNumberOfRemoteAccessUrlsByAdminId";
const GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_ADMIN =
  "/web-api/getTotalNumberOfEntertainedRequestsByAdminId";
const GET_TOTAL_NUMBER_OF_DENIED_REQUESTS_ADMIN =
  "/web-api/getTotalNumberOfDeniedRequestsByAdminId";

const GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER =
  "/consumer-api/getTotalNumberOfConnectedHostsByDeveloperId";

const GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER =
  "/consumer-api/getTotalNumberOfAllowedRemoteDatabaseAccessUrlsByDeveloperId";

const GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER =
  "/consumer-api/getTotalNumberOfEntertainedRequestsByDeveloperEmail";

const GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER =
  "/consumer-api/getTotalNumberOfDeniedRequestsByDeveloperEmail";
const CHECK_API_STATUS="/check-central-api-status";
const GET_MAJOR_COUNTS="/consumer-api/getMajorCounts"
export {
  SIGN_IN_ADMIN_ACCOUNT,
  CREATE_ADMIN_ACCOUNT,
  VERIFY_JWT_TOKEN,
  GOOGLE_AUTH,
  GITHUB_AUTH,
  AUTH_PAGE,
  LOAD_PENDING_HOSTS_LIST,
  SET_HOST_STATUS,
  LOAD_CONNECTED_HOSTS_LIST,
  SET_STATUS_OF_HOST_ACCESS_URL,
  LOAD_LIST_OF_SERVICE_PROVIDERS,
  MAKE_CON_REQUEST_FOR_DEV_TO_ADMIN,
  LOAD_LIST_OF_DEV_CONNECTION_REQ_BY_ADMIN_ID,
  UPDATE_DEV_ADMIN_CON_STATUS,
  LOAD_LIST_OF_DEVELOPER_ACCOUNTS_BY_ADMIN_ID,
  LOAD_LIST_OF_ACTIVE_HOSTS_BY_DEVELOPER_ID,
  GENERATE_HOST_ACCESS_URL_TOKEN,
  LOAD_LIST_OF_DENIED_REQUESTS,
  LOAD_LIST_OF_RESOLVED_REQUESTS,
  LOAD_LIST_OF_ALL_HOSTS,
  TEST_HOST_ACCESS_URL,
  STORE_REMOTE_DATABASE_ENDPOINT,
  LOAD_LIST_OF_REMOTE_DATABASE_URLS,
  SET_STATUS_OF_REMOTE_DATABASE_HOST_ACCESS_URL,
  DELETE_REMOTE_DATABASE_ENDPOINT,
  GENERATE_AND_UPDATE_APIKEY,
  MAKE_PAYMENT_REQUEST,
  LOAD_LIST_OF_REMOTE_ENDPOINTS,
  UPDATE_REMOTE_DB_URL_VISIBILITY,
  GET_UNIQUE_ID,
  LOGIN_TO_ACCOUNT,
  SEND_PASSWORD_RESET_LINK,
  DELETE_ACCOUNT,
  TERMITE_ALL_URLS,
  GET_TOTAL_NUMBER_OF_DEVELOPERS_ADMIN,
  GET_TOTAL_NUMBER_OF_HOSTS_ADMIN,
  GET_TOTAL_NUMBER_OF_OPEN_APIS_ADMIN,
  GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_ADMIN,
  GET_TOTAL_NUMBER_OF_DENIED_REQUESTS_ADMIN,
  GET_TOTAL_NUMBER_OF_CONNECTED_HOSTS_DEVELOPER,
  GET_TOTAL_NUMBER_OF_OPEN_APIS_DEVELOPER,
  GET_TOTAL_NUMBER_OF_ENTERTAINED_REQUESTS_DEVELOPER,
  GET_TOTAL_NUMBER_OF_DENED_REQUESTS_DEVELOPER,
  CHECK_API_STATUS,
  NO_INTERNET_CONNECTION,
  GET_MAJOR_COUNTS
};
