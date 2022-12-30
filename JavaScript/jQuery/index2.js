$(document).ready(function() { 

// fadeIn, fadeOut, fadeToggle, fadeTo

// $('#addbutton').click(function () { 
//     $('.test').fadeIn('slow');
//     console.log('object');
// });

// $('#addbutton').click(function () { 
// $('.test').fadeTo(3000, 0.5 ); // speed, transfarancy, callback
// });

// $('#removekbutton').click(function () { 
//     $('.test').fadeOut('fast', function() {
//         console.log('Hidden ');
//     });
// });

// $('#togglebutton').click(function () { 
//     $('.test').toggle(3000);
//     console.log('object');
// });


// slideUp , slideDown & SlideToggle

// function name(params) {
//     $('#togglebutton').css('color','red')
// }
// $('#addbutton').click(function () { 
// $('.test').slideUp('slow', function name(params) {
//     $('#addbutton').css('color','blue')
// });
// });

// $('#removekbutton').click(function () { 
//     $('.test').slideDown('fast');
// });

// $('#togglebutton').click(function () { 
//     $('.test').slideToggle(3000, name);

// });



// Animate Method

// $('#addbutton').click(function () { 
    
//     $('.abc').animate({
//         left: '150px',
//         top: '150px',
//         // width: '+=150px'
//         width: 'toggle'  // hide, show, toggle

//     })
// });


// $('#addbutton').click(function () { 
    
//     $('.abc').animate({left: '150px', fontSize: '10px'})
//     $('.abc').animate({width: '+=150px'})
//     $('.abc').animate({width: 'hide'})

// });

// $('.abc').hide();
// $('#addbutton').click(function () {
//     // $('.abc').show();
//     $('.abc').animate({left: '150px'},'slow')
//     $('.abc').animate({width: '+=150px'}, 'fast')
//     $('.abc').animate({width: 'hide'}, 3000, function () {
//         console.log('Animation');
//     })

// })


// Stop Method 



// $('#addbutton').click(function () { 
    
//     $('.abc').animate({left: '150px', fontSize: '10px'})
//     $('.abc').animate({width: '+=150px'}, 4000)
// });

// $('#removekbutton').click(function () { 
    
//     // $('.abc').stop()
//     // $('.abc').stop(true)
//     $('.abc').stop(true, true)

//  });




// Method Chaining

// $('#addbutton').click(function () { 
    
//     // $('.test').css('color', 'red').slideUp(2000).slideDown(3000);
//     $('.test').css('color', 'red').slideUp(2000, 
//         function () {
//             $('.test').css('color', 'blue')
//         }).slideDown(3000, function () {
//             $('.test').css('background', 'yellow')
//         });

// });




/// Anceter Method (parent, parentsUntil, closest, offsetParent)

// $('#child-C').parent().css('background','red'); 
// $('#inner').parent().css('background','red'); 

// $('#child-C').parents().css('background','red'); 
// $('#child-C').parents('#inner').css('background','red');

// $('#child-C').parentsUntil('#outer').css('background','red'); 
// $('#child-C').offsetParent('#outer').css('background','red'); 

// $('#child-C').closest('div').css('background','red');




// Descendants Methods(Children & Find Method )

// $('#inner').children().css('background','red');
// $('#inner').children('#child-C').css('background','red');

// $('.main').find('.child-C').css('background','red');




// Sibling method (Sibling, next, nextUntil, prev, prevAll, prevUntil)

// $('#child-C').siblings().css('background','red');
// $('#child-C').siblings('h2').css('background','red');

// $('#child-C').next().css('background','red');
// $('#child-C').prev().css('background','red');

// $('#child-C').nextAll().css('background','red');
// $('#child-C').prevAll().css('background','red');

// $('#child-C').nextUntil('.test').css('background','red');
// $('#child-C').prevUntil('.test').css('background','red');



// Filtering Method (First, last, eq, not, slice)

// $('li').first().css('background','red');
// $('li').last().css('background','red');
// $('li').eq(3).css('background','red');

// $('li').filter('.test').css('background','red');
// $('li').not('.test').css('background','red');
// $('li').slice(1,3).css('background','red');



// has & Is Method 

// $('li').has('b, span').css('background','red');
// $('li').click(function (e) { 
//     e.preventDefault();
//     if ($('span').parent().is('li')) {
//         $(this).css('background','red');
//     }
// });




// each Method 

// $('li').each(function () { 
//      console.log($(this).text());
//      $(this).text('Try Again')
// });



// pageX & pageY

// $(document).mousemove(function (e) {
//     $('.abc').text('Xc :' + e.clientX + ' Yc :' + e.clientY + ' X :' + e.pageX + ' Y :' + e.pageY)
//     // values: e.clientX, e.clientY, e.pageX, e.pageY
    
//    let x = e.pageX;
//    let y = e.pageY;

//  $('.off').offset({top:x, left:y});
  
   
// });



// Event Type

// $('.abc').on('click mouseover dblclick mouseout', function (event) {
//     $('h1').html('Event : '+ event.type);
// })



// Event Which Property

// $('.abc').on('mouseover mousedown mouseout', function (event) {
//     $('h1').html( event.type + ' '+ event.which);
//     // 1 left 2 center 3 right
// });
// $('#input').on('keydown', function (event) {
//     $('h1').html( event.type + ' '+ event.which);
// })


// Event Target Property

// $('.test').on('click', function (event) {
//     // $('h1').html( event.type + ' '+ event.target.nodeName);
//     $('h1').html( event.type + ' '+ event.target.innerHTML);
// });


// Event preventDefault Method


// $('#google').click(function (e) { 
//     e.preventDefault();
//     $('h2').html(e.isDefaultPrevented())
// });



// Event stopPropagation Method 

// $('.test').click(function (e) { 
//     e.stopPropagation()

//     alert('Div')
    
// });
// $('h2').click(function (e) { 
//     e.stopPropagation()
//     alert('h2 ' + e.isPropagationStopped() )
    
// });
// $('p').click(function (e) { 
//     e.stopPropagation()
//     alert('p') 
// });
// $('button').click(function (e) { 
//     e.stopPropagation()
//     alert('button')
// });


// Event Data Property 

$('p').each( function (i) {
    $(this).on('click',{value:i}, function(event) {
        alert(event.data.value)
        alert($(this).text())
    })
});


});