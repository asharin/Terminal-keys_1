/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('E1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'E1',

    stores: [ 'Keys',
    		  'Opers',
    		  'Katamarans',
    		  'Stuffs'
        // TODO: add global / shared stores here
    ],
    launch: function () {
    var key_sel = 0;
        // TODO - Launch the application
    }
});
