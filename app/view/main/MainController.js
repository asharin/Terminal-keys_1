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
                    var grid = button.up('grid');
                    var store = grid.getStore();
                    var model = store.getModel();
                    var dt = new Date();
                    //var rec = new store.getModel({trtime: dt})
                    var rec = new model();
                    var pec = {};
                    if (rec.getId().substring(9,12) === 'Key'){
                        console.log('keys!'+store.getCount());
                        pec = {keyid: store.getAt(store.getCount()-1).get('keyid')+1};
                        } 
                        else if (rec.getId().substring(9,12) === 'Ope'){
                            console.log('operation!')
                        }
                         else if (rec.getId().substring(9,12) === 'Stu'){
                            console.log('stuffs!')
                        }
                          else if (rec.getId().substring(9,12) === 'Kat'){
                            console.log('terminals!')
                      }; 
                    rec.data = pec;
                    console.log(rec.getId().substring(9,12));
                    console.log("add click " +'  '+ rec.getId());
                    store.insert(0,pec);
                    grid.editingPlugin.startEdit(0,1); 
                    grid.getView().refresh(); 
                   // grid.rowEditing.startEdit(newRow,rowIndex + 1); grid.rowEditing.clearListeners();
                },
    onDeleteClick: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    console.log("delete click " + grid.getId());
                    grid.getStore().removeAt(rowIndex);
                    grid.refresh(); 
                },
    onInfoClick: function(grid, rowIndex, colIndex,record, item) {
                //console.log(grid.getStore().getAt(rowIndex).get('stuff2id'));
                var rec = grid.getStore().getAt(rowIndex);
                var k = Ext.getStore('Keys').findRecord('keyid',rec.get('keyid'));
                Ext.Msg.show({

                    title: rec.get('trtime').toString(),
                    width: 600,
                    minHeigth:400,
                    message:'Ключ: ' + k.get('hole') + k.get('name') + '<br><br>f<br>f<br>f<br><br>'
                })
                },
    onConfirm: function (choice) {
        if (choice === 'yes') { 
            //
        }
    }
});
