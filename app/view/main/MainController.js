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
                    var store = button.up('grid').getStore();
                    var dt = new Date();
                    //var rec = new store.getModel({trtime: dt})
                    console.log("add click " + dt.toString());
                    store.insert(0,{trtime: dt,id:''});
                },
    onDeleteClick: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    console.log("delete click " + grid.getId());
                    grid.getStore().removeAt(rowIndex);
                },
    onInfoClick: function(grid, rowIndex, colIndex,record, item) {
                //console.log(grid.getStore().getAt(rowIndex).get('stuff2id'));
                var rec = grid.getStore().getAt(rowIndex);
                Ext.Msg.show({

                    title: rec.get('trtime').toString(),
                    width: 600,
                    minHeigth:400,
                    message:'Ключ: ' + rec.get('keyid') +'<br><br>f<br>f<br>f<br><br>'
                })
                },
    onConfirm: function (choice) {
        if (choice === 'yes') { 
            //
        }
    }
});
