export const DefaultUserImage = '/images/user.png';

export const SiteName = 'AR-CMS';

export const CsrfToken = document.getElementById('_token').getAttribute('content');

export const ApiUrl = 'https://AR-CMS.test/api';

export const Routes = {
    Dashboard: '/',
    Admins: '/admins',
    AdminsCreate: '/admins/create',
    AdminsEdit: (id = ':id') => `/admins/${id}/edit`,
    ScenarioConstructor: '/scenario-constructor',
};
