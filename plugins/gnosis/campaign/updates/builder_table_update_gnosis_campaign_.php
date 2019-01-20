<?php namespace Gnosis\Campaign\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateGnosisCampaign extends Migration
{
    public function up()
    {
        Schema::table('gnosis_campaign_', function($table)
        {
            $table->renameColumn('campaign_id', 'id');
        });
    }
    
    public function down()
    {
        Schema::table('gnosis_campaign_', function($table)
        {
            $table->renameColumn('id', 'campaign_id');
        });
    }
}
