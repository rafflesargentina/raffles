<?php

namespace Raffles\Modules\Raffles2018\Providers;

use Caffeinated\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('raffles2018', 'Resources/Lang', 'app'), 'raffles2018');
        $this->loadViewsFrom(module_path('raffles2018', 'Resources/Views', 'app'), 'raffles2018');
        $this->loadMigrationsFrom(module_path('raffles2018', 'Database/Migrations', 'app'), 'raffles2018');
        $this->loadConfigsFrom(module_path('raffles2018', 'Config', 'app'));
        $this->loadFactoriesFrom(module_path('raffles2018', 'Database/Factories', 'app'));
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
