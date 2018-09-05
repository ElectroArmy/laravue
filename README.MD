### Steps to install ###
1. Run composer install
2. Run npm install
3. After configuring your database settings (see below) run php artisan migrate
4. Run php artisan key:generate
5. Run php artisan serve --port=8000
6. Serve the application by running: `php artisan serve --port=8000`

### Configure the Database (optional) 

If you want to use `mysql` for the example, change settings in `.env` file. The default settings are:

    DB_HOST=localhost
    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret

After the database is configured, apply the migrations:

    php artisan migrate


