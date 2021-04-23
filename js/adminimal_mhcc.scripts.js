(function($, Drupal) {
  /**
   * Relocate Role Expire fields
   */
  Drupal.behaviors.roleFieldsRelo = {
    attach: function(context, settings) {
      $('#edit-roles--wrapper, #edit-status--wrapper').appendTo('#status-and-roles .fieldset-wrapper');
    }
  }; 

})(jQuery, Drupal);
