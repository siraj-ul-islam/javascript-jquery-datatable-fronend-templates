$(document).ready(function() {
// addClass & removeClass Method
// $('#addbutton').click(function(){
//     $('.test').addClass('first');
//     console.log('add');
// });

// $('#removekbutton').click(function(){
//     $('.test').removeClass('first');
//     console.log('remove ');
// });

// $('#togglebutton').click(function(){
//     $('.test').toggleClass('first');
//     console.log('toggle ');
// });

// CSS method

// $('#addbutton').click(function(){
//     $('.test').css({
//         'background': 'pink',
//         'color' : 'red',
//         'border' : '2px dotted yellow'
//     })
//     console.log('add');
// });

// On & Off Method


// $('#addbutton'). on('click', function(){
//     $('.test').css('color','red')

// });

// $('#box2'). on("mouseover mouseout", function(){
//     $(this).toggleClass('first')
// });
// $('#box2').on({
//     "click" : function () {
//         $('.test').css('color','red')
//     },
//     "mouseover" : function () {
//         $('.test').css('color','green')
//     },
//     "mouseout" : function () {
//         $('.test').css('color','blue')
//     }
// });

// $('#addbutton'). click( function(){
//     $('.test').off("mouseover mouseout")

// });



// Append & Prepend Method

// $('#addbutton'). click( function(){
//     $('.test').prepend('<h1>Prepend</h1>');

// });
// $('#removekbutton'). click( function(){
//     $('.test').append('<h1>Append</h1>');

// });

// After & Before Method

// $('#addbutton'). click( function(){
//     $('.test').before('<h1>Before</h1>');

// });
// $('#removekbutton'). click( function(){
//     $('.test').after('<h1>After</h1>');

// });



// Empty & Remove Method

// $('#addbutton'). click( function(){
//     $('.test').empty();

// });
// $('#removekbutton'). click( function(){
//     $('.test').remove()

// });



// AppendTo & PrependTo Method

// $('#addbutton'). click( function(){
//     $('<h1> AppendtO</h1>').appendTo('.test');

// });
// $('#removekbutton'). click( function(){
    
//     $('<h1>PrependTo</h1>').prependTo(('.test'))

// });



// Clone Method

// $('#addbutton'). click( function(){
//     $('#box2 h2').clone().prependTo('#box');
//     $('#box2 p').clone().appendTo('#box');
//     console.log('callll');

// });


// ReplaceWith & ReplaceAll Method

// $('#addbutton'). click( function(){
//        $('#box2 p:first').replaceWith('Hello Guys');
// //    $('#box2 p:first').replaceWith('<h2>Hello Guys</h2>>');
// // $('#box2 p:nth-child(3)').replaceWith('<h2>Hello Guys</h2>');
// // $('<h2>Hello Guys</h2>').replaceAll('#box2 p');
// });


// Wrap & UnWrap Method

// $('#addbutton'). click( function(){
//     $('#box2 p:first').wrap("<h1 id='test'></h1>");

// });

// $('#removekbutton'). click( function(){
    
//     $('#box2 p:first').unwrap();

// });



// WrapAll & WrapInner Method

// $('#addbutton'). click( function(){
    
//     $('#box2 p').wrapAll("<h1 id='test'></h1>");

// });

// $('#addbutton'). click( function(){
//     $('#box2 h2').wrapInner("<b></b>");
// console.log('object');
// });


// Width & Height Methods

// $('#addbutton'). click( function(){
//    console.log('width'+ $('#box2').width());
//    console.log('innerWidth'+ $('#box2').innerWidth());
//    console.log('outerWidth'+ $('#box2').outerWidth());
//    console.log('outerWidth(true)'+ $('#box2').outerWidth(true));

//    console.log('height'+ $('#box2').height());
//    console.log('innerHeight'+ $('#box2').innerHeight());
//    console.log('outerHeight'+ $('#box2').outerHeight());
//    console.log('outerHeight(true)'+ $('#box2').outerHeight(true));

// });



// Position & Offset Method

// $('#addbutton'). click( function(){
// // var position = $('#box2 h2').position();
// // var top = position.top;
// // var left = position.left;
// // console.log(top , left);


// var offset = $('#box2 h2').offset({top:0, left:0});
// // var offset = $('#box2 h2').offset();
// var top = offset.top;
// var left = offset.left;
// console.log(top , left);
// });


// 
// scrollTop & scrollLeft Method
// $(window).scroll(function () { 
//     $('#box').html("");
//     $('#box').append('Top : '+ $(window).scrollTop());
//     $('#box').append(' <br> Left : '+ $(window).scrollLeft());
//     // if ($(window).scrollTop() >= 56) {
//     //     alert('Danger')
//     // }

//     $('#addbutton'). click( function(){
//         $(window).scrollTop(200);
//         $(window).scrollLeft(100)
// });
    
//     console.log( $(window).scrollTop());
//     console.log( $(window).scrollLeft());
// });



// hasClass Method 

//     $('#addbutton'). click( function(){
//       console.log( $('#box2').hasClass('test'));
//       let v = $('#box2 h2').hasClass('test');
//       if (v == true) {
//     $('#box2').css({
//         'background': 'pink',
//         'color' : 'red',
//         'border' : '2px dotted yellow'
//     })      }
     
// });



// Hide Show & Toggle Method

// $('#addbutton'). click( function(){
//     $('#box2').hide('slow'); // slow , fast
//  });

// $('#addbutton'). click( function(){
//     $('#box2').hide('fast', function() {
//         $('#addbutton').css('color','red')
//     }); // slow , fast
//  });
//  $('#removekbutton'). click( function(){
//     $('#box2').show('slow', function() {
//         $('#addbutton').css('color','')
//     });
//  });

//  $('#togglebutton'). click( function(){
//     $('#box2 p').toggle(3000);
//  });

})