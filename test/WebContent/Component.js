jQuery.sap.declare("sap.ui.demo.tgd.Component");

sap.ui.core.UIcomponent.extend("sap.ui.demo.tgd.component",{
	metadata : { name : "TGD Demo App",
				 version : "1.0",
				 includes : [],
				 dependencies : {libs : [sap.m] , components : []}},
				
	rootView : "sap.ui.demo.tgd.view.App",
	
	config  : {
		resourceBundle : "i18n/messageBundle.properties",
		serviceConfig : {name : "NorthWindService" , serviceUrl : "http://services.odata.org/V2/(S(sapuidemotgd))/oData/OData.svc" }
	}
});
