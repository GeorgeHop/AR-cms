<?php

namespace App\Models;

use Spatie\Permission\Models\Role as SpatieRole;

class Role
{
    const GOD = 'god';
    const ADMIN = 'admin';
    const SCENARIST = 'scenarist';
    const SUPPORT = 'support';

    const DEFAULT_PERMISSIONS = [
        self::GOD => [Permission::GOD],
        self::ADMIN => [
            Permission::ACCESS_ADMIN_PANEL,
            Permission::CREATE_ROLES,
            Permission::UPDATE_ROLES,
            Permission::LIST_USERS,
            Permission::READ_USERS,
            Permission::CREATE_USERS,
            Permission::UPDATE_USERS,
            Permission::CHANGE_USER_ROLES,
        ],
        self::SCENARIST => [
            Permission::ACCESS_ADMIN_PANEL,
        ],
        self::SUPPORT => [
            Permission::ACCESS_ADMIN_PANEL,
        ],
    ];

    public static function seed() {
        Permission::seed();
        foreach (self::DEFAULT_PERMISSIONS as $roleName => $permissions) {
            $role = SpatieRole::create(['name' => $roleName]);
            $role->givePermissionTo($permissions);
        }
    }
}
