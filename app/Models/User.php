<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class User
 *
 * @package App\Models
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class User extends Authenticatable
{
    use HasFactory, HasApiTokens, HasRoles;

    protected $perPage = 10;

    protected $fillable = [
        'username',
        'email',
        'password',
    ];

    protected $hidden = ['password'];

    protected $with = ['roles'];
}
