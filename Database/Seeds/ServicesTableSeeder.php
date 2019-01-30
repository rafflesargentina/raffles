<?php

namespace Raffles\Modules\Raffles2018\Database\Seeds;

use Raffles\Modules\Raffles2018\Models\Service;

use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->_consulting();
        $this->_virtualCto();
        $this->_webDevelopment();
    }

    private function _consulting()
    {
        $fillable = [
            'description' => 'Te asesoramos en la planificación e implementación de tus proyectos.<br>Brindamos soporte técnico en variedad de productos y servicios.',
            'featured' => '1',
            'name' => 'Consultoría',
            'slug' => 'consulting',
        ];

        $service = Service::create($fillable);
        $service->featured_photo()->create(['location' => 'img/consulting.min.svg']);
    }

    private function _virtualCto()
    {
        $fillable = [
            'description' => 'Tu aliado y líder tecnológico en La Nube.<br>Ponemos a punto tu Producto Viable Mínimo mediante Tecnología Viable Mínima en un contexto de pago por consumo.',
            'featured' => '1',
            'name' => 'CTO Virtual',
            'slug' => 'virtual-cto',
        ];

        $service = Service::create($fillable);
        $service->featured_photo()->create(['location' => 'img/services_consulting.min.svg']);
    }

    private function _webDevelopment()
    {
        $fillable = [
            'description' => 'Realizamos proyectos a medida, ya sea un blog, o un gestor de contenidos, e-commerce, o una aplicación con API con integración en La Nube.',
            'featured' => '1',
            'name' => 'Desarrollo WEB',
            'slug' => 'web-development',
        ];

        $service = Service::create($fillable);
        $service->featured_photo()->create(['location' => 'img/web_development.min.svg']);
    }
}
