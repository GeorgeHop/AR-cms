<?php

namespace App\Models;

use ReflectionClass;
use Spatie\Permission\Models\Permission as SpatiePermission;

class Permission
{
    const GOD = 'god';

    // admin panel
    const ACCESS_ADMIN_PANEL = 'access admin panel';

    // roles
    const CREATE_ROLES = 'create roles';
    const UPDATE_ROLES = 'update roles';

    // users
    const LIST_USERS = 'list users';
    const READ_USERS = 'read users';
    const CREATE_USERS = 'create users';
    const UPDATE_USERS = 'update users';
    const CHANGE_USER_ROLES = 'change user roles';

    // scenarios
    const LIST_SCENARIOS = 'list scenarios';
    const READ_SCENARIOS = 'read scenarios';
    const CREATE_SCENARIOS = 'create scenarios';
    const UPDATE_SCENARIOS = 'update scenarios';
    const DELETE_SCENARIOS = 'delete scenarios';

    public static function seed() {
        foreach (array_values((new ReflectionClass(__CLASS__))->getConstants()) as $permission)
            SpatiePermission::create(['name' => $permission]);
    }
}
