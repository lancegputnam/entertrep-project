var Post = Parse.Object.extend ({
	className: "User", 
});

var Vendor = Parse.Object.extend ({
	className: "Vendor"
});

var UserCollection = Parse.Collection.extend({
	model: Post
});

var VendorCollection = Parse.Collection.extend({
	model: Vendor
});

var posts = new UserCollection