var User = Parse.Object.extend ({
	className: "User"
});

var Vendor = Parse.Object.extend ({
	className: "Vendor"
});




var UserCollection = Parse.Collection.extend({
	model: User
});

var VendorCollection = Parse.Collection.extend({
	model: Vendor
});