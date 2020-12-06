<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param User $user
     */
    public function index(User $user)
    {
        $allUsers = $user->latest()->paginate();

        return $allUsers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'user_name' => 'required',
            'user_role' => 'required',
            'email' => 'required'
        ]);

        $user = User::create([
            'user_name' => $validateData['user_name'],
            'user_role' => $validateData['user_role'],
            'email' => $validateData['email']
        ]);

        return 'User was added';
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $editedUser = User::find($id);

        return $editedUser;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return string
     */
    public function update(Request $request, $id)
    {
        $updatedUser = User::find($id);
        $updatedUser->user_name = $request->get('user_name');
        $updatedUser->user_role = $request->get('user_role');
        $updatedUser->email = $request->get('email');
        $updatedUser->save();

        return 'User updated successfully';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return string
     */
    public function destroy($id)
    {
        $deleteUser = User::find($id);
        $deleteUser->delete();

        return 'User deleted successfully';
    }
}
