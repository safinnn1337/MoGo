    $(function() {

        var header = $("#header"),  
            introH = $("#intro").innerHeight(),
            scrolloffset = $(window).scrollTop();



            /*Header fixed*/
        checkScroll(scrolloffset);


        $(window).on("scroll", function() {

            scrolloffset = $(this).scrollTop();
            
            checkScroll(scrolloffset);

        });

        function checkScroll(scrolloffset) {           

           if( scrolloffset >= introH ) {
            header.addClass("fixed");
           }    else {
            header.removeClass("fixed");
           }
        }


        /*Smooth scroll*/


        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();


            var $this = $(this), 
                blockId = $this.data('scroll');
                blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
                $this.addClass("active");

                


            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
            /*
            $("#links").click(function(){
                $("#menu").addClass("remove-menu");
              });*/
        });

        /*Закрытие*/
       

        /* Menu nav toggle*/

        $("#nav_toggle").on("click", function(event) {
            event.preventDefault();

            $(this).toggleClass("active");
            $("#nav").toggleClass("active");

        });




        /*Collapse*/

        $("[data-collapse]").on("click", function(event){
            event.preventDefault();


            var $this = $(this), 
                blockId = $this.data('collapse');

                
                $(blockId).slideToggle();

        })


        /*slider*/
        $("[data-slider]").slick({
            infinite: true,
            fade: false,
            slidesToShow: 1,
           slidesToScroll: 1
            
        });


        





    });