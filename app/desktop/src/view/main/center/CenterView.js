Ext.define('MyApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items: [{
		xtype: 'panel',
		fullscreen: true,
		//layout: 'hbox',
		defaultType: 'textfield',
		default: {
		 	flex: 1
		 },
		items: [{
			html: 'Raja Form',
			style: 'background-color :white'
		},
		{
            fieldLabel: 'First Name',
            name: 'firstName',
			
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName'
        },
		{
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'birthDate',
			msgTarget: 'under',
			invalidText: '"{0}" Bad. "{1}" Good.'

        },
		{
			xtype: 'button',
			text: 'Add',
			style: 'background-color :yellow'
		}

	]
		
	}],
	buttons: [{
		text: 'Submit'
	}]
});
