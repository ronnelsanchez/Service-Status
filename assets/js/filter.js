(function(window, document, undefined) {

    'use strict';

    var $x = $('.quick-tag');
    var $category = $x.find('.category');
    var $service = $x.find('.service');
    var $categoryTag = $category.find('.tag:not(".first")');
    var $categoryTagAll = $category.find('.tag.first');
    var $serviceTag = $service.find('.tag:not(".first")');
    var $categoryTagAll = $category.find('.tag.first');
    var $serviceTagAll = $service.find('.tag.first');
    var $categoryTagBtn = $categoryTag.find('a');
    var $categoryTagService = $serviceTag.find('a');

    $serviceTag.hide();
    $categoryTagBtn.on('click', showServiceTag);
    $categoryTagAll.on('click', selectAllCat);
    $serviceTagAll.on('click', selectAllService);


    function showServiceTag() {
        $(this).toggleClass('active');
        var $categoryTitle = $(this).data().category;
        isEmptyServiceTag($(this));
        if (isEmptyServiceTag($(this))) {
            $categoryTagService.each(function() {
                if ($categoryTitle == $(this).data().category) {
                    if ($(this).is('[data-category="' + $(this).data().category + '"]')) {
                        $service.slideDown(400);
                        $(this).closest('.tag').toggle();
                    }
                }
            });
        } else {
            $service.slideUp();
            if ($('.service .tag:not(".first")').is(':visible')) $('.service .tag:not(".first")').hide();
            $(this).removeClass('active');
        }
    };

    function selectAllCat() {
        $categoryTagBtn.trigger('click');
    }

    function selectAllService() {
        $categoryTagService.toggleClass('active');
    }

    function isEmptyServiceTag($el) {
        var count = 0;
        $categoryTagBtn.each(function() {
            if ($(this).hasClass('active')) {
                count++;
            }
        });
        if (count > 0) {
            count = 0;
            return true;
        } else {
            return false;
        }
    };


})(window, document);
