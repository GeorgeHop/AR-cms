<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(User $user): LengthAwarePaginator {
        return $user->paginate();
    }

    public function create() {
        //
    }

    public function store(Request $request): User {
        // return User::create();
    }

    public function show(User $user): User {
        return $user;
    }

    public function update(User $user): User {
        $user->fill($this->validateRequest($user))->save();
        return $user;
    }

    public function destroy(User $user): JsonResponse {
        $user->delete();
        return response()->json();
    }

    private function validateRequest(User $user = null): array {
        return request()->validate([
            'username' => ['required', Rule::unique('users')->ignore($user)],
            'email' => ['required', Rule::unique('users')->ignore($user)],
        ]);
    }
}
