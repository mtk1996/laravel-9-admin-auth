<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('admin.auth.login');
    }

    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => "required",
            'password' => "required",
        ]);

        $cre = $request->only('email', 'password');
        if (auth()->attempt($cre)) {
            return redirect('/adm/')->with('success', 'Welcome Back');
        }
        return redirect()->back()->with('error', 'Email And Password Dont Match!');
    }
}
