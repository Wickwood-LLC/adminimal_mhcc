(function($, Drupal) {
  /**
   * Relocate Role Expire fields
   */
  Drupal.behaviors.roleFieldsRelo = {
    attach: function(context, settings) {
      $('[class*="form-item-role-expire"]').each(function() {
        $(this).appendTo('#status-and-roles .fieldset-wrapper');
      });
    }
  }; 

})(jQuery, Drupal);
