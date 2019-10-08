function removeSMEshit(){
  jQuery('.tp-modal, .fc-ab-root, .fc-whitelist-root, .tp-backdrop').remove();
  jQuery('body.tp-modal-open').removeClass("tp-modal-open");
  jQuery('body').css("overflow","auto");
}
setTimeout(removeSMEshit, 2000);
