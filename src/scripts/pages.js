/* Page Transitions Function */

$(function () {
  $('.nav-1-next').click(function () {

    if ($('.pages .background .background').eq(0).hasClass('current')) {
      return false
    } else {
      $('.pages .background')
        .addClass(
          'move-from-top'
        )
        .css({ opacity: '0', 'z-index': '0' })
      $('.current').is(function () {
        $(this).removeClass('current')
        $(this).css('opacity', '1')
      })
      $('.pages .background')
        .eq(-2)
        .addClass('current move-from-top')
        .css('opacity', '1')
    }
  })

  $('.nav-2-next').click(function () {
    if ( $('.pages .background:eq(-2)').hasClass('current') ) {
      if ( $('.pages .background').eq().hasClass('current') ) {
        return false
      } else {
        $('.pages .background')
          .eq(-1)
          .removeClass('fold-bottom')
          .addClass('current move-from-top')
          .css('opacity', '1')
      }
    }
  })

})
