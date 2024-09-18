<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
   public function index()
   {
    return Inertia::render('welcome/Index', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
   }
}
