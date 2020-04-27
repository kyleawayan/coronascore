var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

function check() {
require('simple-git')('./test')
     .exec(() => console.log('starting check...'))
     .pull((err, update) => {
        if(update && update.summary.changes) {
            console.log('there was a change!')
            dir = './test/data'
            var files = fs.readdirSync(dir);
        
            // use underscore for max()
            return _.max(files, function (f) {
                var fullpath = path.join(dir, f);
        
                // ctime = creation time is used
                // replace with mtime for modification time
                console.log(fs.statSync(fullpath).ctime);
                console.log(fullpath)
                fs.copyFile(fullpath, './data.txt', (err) => {
                    if (err) throw err;
                    console.log('source.txt was copied to destination.txt');
                  });
                });
        }
     })
    }

setInterval(check,5000);