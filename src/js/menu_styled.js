
                function handleMenuStyle() {
                    var CurrentUrl= document.URL;
                    var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();

                    $( ".side-nav ul li a" ).each(function() {
                        var ThisUrl = $(this).attr('href');
                        var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
                        if(ThisUrlEnd == CurrentUrlEnd)
                            $(this).addClass('side-menu--active')
                        else
                            $(this).removeClass('side-menu--active')
                    });
                };

                $(document).on('click', 'a.side-nav ul li a', function () {
                    // some ajax magic here to load the page content
                    // plus something that replaces the content...  

                    // execute your custom javascript stuff that should be called again
                    handleMenuStyle()

                    // replace the browser-url to the new url
                    // maybe a link where the user has clicked
                    history.pushState();
                })

                $(window).on('popstate', function () {
                    // the user has navigated back,
                    // load the content again (either via ajax or from an cache-object)
                    // execute your custom stuff here...
                    handleMenuStyle()
                })

                document.addEventListener('popstate', handleMenuStyle());