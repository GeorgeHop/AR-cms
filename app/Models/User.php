<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

/**
 * Class User
 *
 * @package App\Models
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class User extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $fillable = ([
        'username',
        'email',
        'password',
    ]);

    protected $hidden = [
        'password'
    ];
}
