$(function () {

    $('.analytics__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.analytics__tabs li', function () {
        var itemId = $(this).attr('data-id');
        var activeTab = $('.analytics__content').parent().find('.analytics__content[data-id='+itemId+']');
        $('.analytics__content').hide();
        activeTab.show();
        $('.analytics__tabs li').removeClass('active');
        $(this).addClass('active');
    });

});