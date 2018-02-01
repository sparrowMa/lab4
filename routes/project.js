
// export the new end point

// make a controller called viewProject function

// routes/project.js should receive the 'name' variable. Can view it in console log
exports.viewProject = function(req, res){
	// load a file called "project.handlebars" and display it
	var name = req.params.name; 	// this "name" is comes from the ":name"
	console.log("The project name is: " + name);

	// the 1st para, 'project', is the 'project.handlebars' file.
	// pass the name into the template, and the variable name in template is 'projectName'
	res.render('project', {
	    'projectName': name
	});

	// res.render('project');
}



