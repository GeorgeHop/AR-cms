<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $root = User::create([
            'username' => 'root',
            'email' => 'test@test.test',
            'email_verified_at' => now(),
            'password' => Hash::make('root'),
        ]);
        $root->assignRole(Role::GOD);
        User::factory(20)->create();
    }
}
