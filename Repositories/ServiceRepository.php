<?php

namespace Raffles\Modules\Raffles2018\Repositories;

use Raffles\Modules\Raffles2018\Models\Service;

use Caffeinated\Repository\Repositories\EloquentRepository;

class ServiceRepository extends EloquentRepository
{
    /**
     * @var Model
     */
    public $model = Service::class;

    /**
     * @var array
     */
    public $tag = ['Service'];
}
