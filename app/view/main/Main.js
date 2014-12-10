/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('E1.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        title: 'Подсистема учета ключей',
        height:'100%',

        xtype: 'tabpanel',
        bodyPadding:'15',
        items:[{
            extend: 'Ext.container.Container',
            title: 'Ключи',
            layout: {
                type: 'table',
                columns:'2'},
            items:[{xtype:'KeyGrid',
                    width: 300,
                    height: 500,
                    padding:'20 20 0 10'},
                   {xtype: 'OperGrid',
                    width:700,
                    height: 500,
                    padding:'20 10 0 10'}
                 ]
                },
            {title: 'Техники',
            items:[
            {   xtype: 'StuffGrid',
                height:'500',
                widht:'500',
                padding:'20 20 0 10'
            }
            ]
        },{
            title: 'Катамараны',
            items:[
            {   xtype: 'TermGrid',
                height:'500',
                widht:'500',
                padding:'20 20 0 10'
            }
            ]
        }]
    }]
});
