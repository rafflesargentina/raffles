<?php

namespace Raffles\Modules\Raffles2018\Http\Controllers;

use Raffles\Modules\Raffles2018\Repositories\ServiceRepository;

use RafflesArgentina\ResourceController\ApiResourceController;

class ServiceController extends ApiResourceController
{
    protected $repository = ServiceRepository::class;

    protected $resourceName = 'services';
}
