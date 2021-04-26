(function($, Drupal) {
  /**
   * Relocate Role Expire fields
   */
  Drupal.behaviors.roleFieldsRelo = {
    attach: function(context, settings) {
      if (!$('#edit-roles--wrapper, #edit-status--wrapper').length) {
        $('#status-and-roles').hide();
      } else {
        $('#edit-roles--wrapper, #edit-status--wrapper').appendTo('#status-and-roles .fieldset-wrapper');
      }
    }
  }; 

})(jQuery, Drupal);
