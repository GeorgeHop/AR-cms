export const DefaultUserImage = '/images/user.png';

export const SiteName = 'AR-CMS';

export const Routes = {
    Dashboard: '/',
    AdminsList: '/admins',
    AdminCreate: '/admins-create',
    AdminEdit: (id = ':id') => `/admins-edit/${id}`,
};
