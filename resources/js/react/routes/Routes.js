export default {
    Dashboard: '/',
    AdminsList: '/admins',
    AdminCreate: '/admins-create',
    AdminEdit: (id = ':id') => `/admins-edit/${id}`,
};
