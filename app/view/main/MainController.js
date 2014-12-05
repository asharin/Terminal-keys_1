/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('E1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onRemoveClick: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onAddClick: function(button) {
                    console.log("Terminate" + button.up('grid').getId() );
                    button.up('grid').getStore().insert(button.up('grid').getStore().count(),{id:0, name:'' ,hole:''});
                },
    onDeleteClick: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Terminate " + grid.getId());
                    grid.getStore().removeAt(rowIndex);
                },
    onConfirm: function (choice) {
        if (choice === 'yes') { 
            //
        }
    }
});
