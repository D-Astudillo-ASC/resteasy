let remotehost;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	remotehost =  'http://127.0.0.1:8000';
} else {
    remotehost =  'https://resteasyserver.herokuapp.com';
}
export const REMOTE_HOST = remotehost;
export const STRIPE_PUBLIC_KEY = 'pk_test_MmeGG95E0YUrYP3JDHxXjjU9008gnRu36A';

export const QUESTIONS_CURRENT_STEP = "questions_current_step";

export const REGISTRY_FIRST_NAME = "registry_first_name";
export const REGISTRY_MIDDLE_NAME = "registry_middle_name";
export const REGISTRY_LAST_NAME = "registry_last_name";
export const REGISTRY_SUFFIX = "registry_suffix";
export const REGISTRY_PERSON_START_DATE = "registry_person_start_date";
export const REGISTRY_PERSON_END_DATE = "registry_person_end_date";
export const REGISTRY_PERSON_DATE_MANUAL = "registry_person_date_manual";
export const REGISTRY_PERSON_RELATION = "registry_person_relation";

export const ACCESS_TOKEN = "user_access_token";
export const APP_USER_DATA = "user_data";
