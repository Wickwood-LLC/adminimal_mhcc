(function($, Drupal) {
  /**
   * Toolbar Spacing
   */
  Drupal.behaviors.labelWidths = {
    attach: function(context, settings) {
      function labelWidths() {
        $('.form-type-textfield, .form-type-number, .form-type-select, .form-type-email, .form-type-password, .form-type-tel').each(function() {
          var labelWidth = $(this).find('label').width();
          var inputWidth = 100% - labelWidth;
          $(this).find('input').css(
              'flex', inputWidth
            );
        });
      }

      $(window).resize(labelWidths);
    }
  }; 

})(jQuery, Drupal);
