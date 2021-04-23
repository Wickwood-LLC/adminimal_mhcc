(function($, Drupal) {
  /**
   * Relocate Role Expire fields
   */
  Drupal.behaviors.roleFieldsRelo = {
    attach: function(context, settings) {
      $('#edit-roles--wrapper, #edit-roles--wrapper').appendTo('#status-and-roles .fieldset-wrapper');
    }
  }; 

})(jQuery, Drupal);
