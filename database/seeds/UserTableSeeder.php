<?php



use App\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {



        $user = User::create([
            'name' => 'admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('Test1234'),
            'is_admin' => 1
        ]);
    }
}
