<?php

namespace Raffles\Modules\Raffles2018\Models;

use Raffles\Models\FeaturedPhoto;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'body',
        'description',
        'featured',
        'name',
        'slug',
    ];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = 'featured_photo';

    /**
     * Get the service's featured photo.
     */
    public function featured_photo()
    {
        return $this->morphOne(FeaturedPhoto::class, 'photoable')->withDefault();
    }

    /**
     * Get all of the projects for the service.
     */
    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
