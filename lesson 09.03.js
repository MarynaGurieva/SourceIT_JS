$(document).ready(function() {
    // var h1 = window.h1 = $('h1');
    // var lis = $('.list li');
    // console.log(lis);
 
    // var first = $(lis).eq(4);
 
    // lis.fadeOut();
    function processContentBlock() {
        var cont = $('.content');
        cont.hide();
        var moreWrapper = $('.more-wrapper');
 
        moreWrapper.on('mouseover', function(e) {
            cont.slideDown();
        });
        moreWrapper.on('mouseleave', function(e) {
            cont.slideUp();
        });
    }
    processContentBlock();
 
    function processTitle() {
        $('#change-title').on('click.name1', function() {
            $('h1')
                .text('jQuery - это НЕ ФРЕЙМВОРК!!!!')
                .css({
                    backgroundColor: 'red'
                })
                .slideUp(1000, function() {
                    $(this).slideDown('fast', function() {
                        $(this).animate({
                            'fontSize': '35px'
                        }).css({
                            'color': '#fff'
                        });
                    });
                });
        });
        $('#change-title').on('click.name2', function() {
            console.log('blbblabla');
        });
    }
    processTitle();
 
 
    function createElem(argument) {
 
        var div1 = $('<div/>', {
            text: 'Bye-bye world!',
            css: {
                color: 'red'
            },
            id: 'test',
            class: 'super-class'
        });
 
 
        var div2 = $('<div>Hello world</div>').appendTo($('#wrapper'));
        console.log(div1[0]);
        console.log(div2[0]);
 
        $('#wrapper').append(div1);
 
    }
    createElem();
 
});