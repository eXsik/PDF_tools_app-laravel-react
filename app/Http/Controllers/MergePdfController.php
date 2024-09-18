<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MergePdfController extends Controller
{
    public function index()
    {
        try {
            return Inertia::render('merge-pdf/Index');
        } catch (\Throwable $e) {
            return back()->with(['error_msg', $e->getMessage()]);
        }
    }
}
