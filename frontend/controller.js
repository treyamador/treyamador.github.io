/*
    frontend controller system
*/


var app = angular.module('personal',[]);


app.controller('homeCtrl',function($scope,$http) {
    // home controller
    
});


app.controller('demoCtrl',function($scope,$http) {
    // projects slide back and forth

    var mapurls = new Map([
        ['/cengine', 'Game Engine'],
        ['/trader', 'BroncoCorner'],
        ['/asteroids', 'Asteroids'],
        ['/robot', 'Robotics'],
        ['/drum', 'Drum machine']
    ]);
    var urls = Array.from(mapurls.keys());
    var length = urls.length;

    var set_dir = function(tag,key,mapurl) {
        $(tag).html(
            '<a href=\"'+key+'\">'+mapurl.get(key)+'</a>');
    }

    var load_directory = function() {
        var http = $(location).attr('href').split('/').pop();
        var i = urls.indexOf('/'+http);
        var prev = urls[(i-1 + length) % length];
        var next = urls[(i+1) % length];

        set_dir('.left-demo',prev,mapurls);
        set_dir('.right-demo',next,mapurls);
    }

    load_directory();



    /*
    var Demo = function(media,header,textbody) {
        this.media = media;
        this.header = header;
        this.textbody = textbody;
    }

    var demos = {
        'cengine': new Demo(
            'cengine.mp4',
            'C++ game engine with SDL graphics library',
            ''
        ),
        'trader': new Demo(
            'trader video',
            '',
            ''
        ),
        'robot': new Demo(
            '',
            '',
            ''
        ),
        'drum': new Demo(
            '',
            '',
            ''
        ),
        'asteroids': new Demo(
            '',
            '',
            ''
        )
    }

    var load_info = function() {

        var route = window.location.href.split('/').pop();
        var demo = demos[route];

        $scope.media = demo.media;
        $scope.header = demo.header;
        $scope.textbody = demo.textbody;

    }
    load_info();
    */

});


app.controller('formCtrl',function($scope,$http) {

    var reset_input = function() {
        $scope.message.username = '';
        $scope.message.subject = '';
        $scope.message.textbody = '';
        $scope.message.email = '';
    }

    var reset_result = function() {
        $scope.submission_result = '';
    }

    $scope.submit_form = function() {
        // check form here
        var proper_input = true;
        $('input,textarea').each(function() {
            var holder = $(this).attr('placeholder');
            if (holder !== 'E-mail (optional)' && (!$(this) || !$(this).val())) {
                $scope.submission_result = holder+' space left blank.';
                proper_input = false;
            }
        });
        if (proper_input) {
            
            $scope.submission_result = 'Processing request...';
            $http({
                method:'POST',
                url:'/contact',
                data:$scope.message
            }).then(function(res) {
                if (res.data.success) {
                    $scope.submission_result = res.data.msg;
                } else {
                    $scope.submission_result = 'There was an error sending message!';
                }
                reset_input();
            }, function(res) {
                $scope.submission_result = res.data.msg;
                reset_input();
            });
        }
    }
});


app.controller('docCtrl',function($scope,$http) {

    const docs = {
        'resume':'files/Amador_Trey_Web_Resume.pdf',
        'nih':'https://www.ncbi.nlm.nih.gov/pmc/articles/'+
                'PMC5013726/pdf/nihms-808778.pdf',
        'ugrj':'http://ssp.ucr.edu/journal/volumes/'+
                'volume7/ugrjournal-volvii_amador.pdf'
    };

    $scope.open_pdf = function(dockey) {
        if (!dockey) {
            dockey = 'resume';
        }
        window.open(docs[dockey]);
    }
});




