<?php namespace Gnosis\Campaign\Models;

use Model;

/**
 * Model
 */
class Campaign extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'gnosis_campaign_';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
}
