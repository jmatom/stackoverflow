module.exports  = {
  	method: function () {
    	var myError = new Error();
		var trace = myError.stack.split('\n');
		trace = trace[1];

		var filename = trace.substr(trace.lastIndexOf('/') + 1);
		filename = filename.substr(0, filename.indexOf(':'));

    	console.log('filename', filename);
  }
};