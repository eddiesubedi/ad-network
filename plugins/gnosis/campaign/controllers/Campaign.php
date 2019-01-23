<?php namespace Gnosis\Campaign\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Campaign extends Controller
{
  public $implement = [];

  public function __construct()
  {
    parent::__construct();
    BackendMenu::setContext('Gnosis.Campaign', 'main-menu-item');
  }
  public function index()
  {

  }
}
