function myFunction() {
  var python = require('child_process').spawn('python', ['./ex.py']);
  python.stdout.on('data', function (data) {
    console.log(data.toString());
  });
}
