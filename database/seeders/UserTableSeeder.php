<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(5)->create();

        User::first()->update([
            'email' => 'qbaweb@example.com',
            'name' => 'Kuba Skupinski',
            'password' => bcrypt('qwe12345')
        ]);
    }
}
