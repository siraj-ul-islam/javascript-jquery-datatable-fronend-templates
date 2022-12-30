$(document).ready(function() {
    let a ;
    // a=  $('#test').html()
    // a =$('.test').html()
    // a = $('h1:last').html()
    // a = $('h1:first').html()
    // $('h1').css('color','red')
    // $('*').css('border','2px solid blue')
    // $('ul li:eq(1)').css('border','2px solid blue')
    // $('ul li:gt(1)').css('border','2px solid blue')
    // $('ul li:lt(2)').css('border','2px solid blue')

    // console.log(a);

// mouse events

    // $('#test').click(function () {
    //     $('#test').css('background-color', 'red')
    // })
    // $('#test').dblclick(function () {
    //     $('#test').css('background-color', 'green')
    // })
    // $('#test').contextmenu(function () {
    //     $('#test').css('background-color', 'blue')
    // })
    // $('#test').mouseenter(function () {
    //     $('#test').css('background-color', 'black')
    // })
    // $('#test').mouseleave(function () {
    //     $('#test').css('background-color', 'white')
    // })

// keyboard events

    // $('body').keypress(function () {
    //     $(this).css('background-color', 'red')
    // })
    // $('body').keydown(function () {
    //     $(this).css('background-color', 'blue')
    // })
    // $('body').keyup(function () {
    //     $(this).css('background-color', 'green')
    // })


// Form Events

    // $('#name, #class, #country').focus(function () {
    //     $(this).css('background-color', 'green')
    // })
    // $('#name, #class').blur(function () {
    //     $(this).css('background-color', '')
    // })
    // $('#country').change(function () {
    //     $(this).css('background-color', 'pink')
    //     let v = $(this).val();
    //     $('#text').html(v)
    // })
    // $('#name, #class').select(function () {
    //     $(this).css('background-color', 'yellow')
    // })
    // $('#formid').submit(function () {
    //     // $('body').css('background-color', 'yellow')
    //     alert('Form Submited')
    // })

// window events
    // $(window).scroll(function () {
    //     // $('body').css('background-color', 'yellow')
    //     console.log('window scrolling');
    // })
    // $('#box').scroll(function () {
    //     $(this).css('background-color', 'yellow')
    //     console.log('inner box  scrolling');
    // })
    // $(window).resize(function () {
    //     $('body').css('background-color', 'blue')
    //     console.log('window  resizing');
    // })
    // // unload when you close a tab
    // // load when you load a tab



 // Get Methods

        //  a = $('#box2').html()
        //  console.log(a); 
        // a = $('#box2').text()
        //  console.log(a); 

        // a = $('#box2').attr('class')
        //  console.log(a); 

    //     $('#formid').submit(function () {

    //     $('body').css('background-color', 'orange')
    //     let n = $('#name').val();
    //     let c = $('#class').val();
    //     let co = $('#country').val();
    //     $('#text').html(n)

    //     alert('call'+ n + c + co);
    // })
      
// Set Methods


        $('#name').val('Siraj ul isalm');
        $('#class').val('7th Semester');
$('#clickbutton').click(function () {
    $('#box2 h2').text('New Text box')
    $('#box2 p').html('New <b>Text </b> box')
    $('#box2 h2').attr('class','red')

    console.log($('#box2 h2').text());
})



  });