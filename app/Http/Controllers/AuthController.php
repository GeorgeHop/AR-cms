<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $user->save();

        return response()->json([
            'message' => 'User created successfully'
        ], 201);
    }

    public function login(Request $request)
    {
        $client = DB::table('oauth_clients')->where('id', 2)->first();

        $http = new Client();

        try {
            $response = $http->post('http://AR-CMS.test/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $client->id,
                    'client_secret' => $client->secret,
                    'username' => $request->input('email'),
                    'password' => $request->input('password'),
                    'scope' => ''
                ],
            ]);

            $tokens = json_decode((string)$response->getBody(), true);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 401) {
                return response()->json('Invalid data', 401);
            }
            throw $e;
        }

        return response()->json($tokens);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logout'
        ]);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
