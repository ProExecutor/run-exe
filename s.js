function myFunction() {
  var python = require('child_process').spawn('python', ['./version.py']);
  python.stdout.on('data', function (data) {
    console.log(data.toString());
  });
}
