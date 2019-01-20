<?php namespace Gnosis\Campaign\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Campaign extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Gnosis.Campaign', 'main-menu-item');
    }
}
