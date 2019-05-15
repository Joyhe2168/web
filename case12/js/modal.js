$(function () {
    var $m_btn = $('#modalBtn');
    var $modal = $('#myModal');
    var $modal2 = $('#myModal2');
    var $modal3 = $('#myModal3');
    $m_btn.on('click', function () {
        $modal.modal({
            backdrop: 'static'
        });
    });
    $modal.on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        $this.css('display', 'block');
        $modal_dialog.css({
            'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2)
        });
    });
    $modal2.on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        $this.css('display', 'block');
        $modal_dialog.css({
            'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2)
        });
    });
    $modal3.on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        $this.css('display', 'block');
        $modal2.css('display', 'none');
        $(".modal-backdrop").css('display', 'none');
        $modal_dialog.css({
            'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2)
        });
    });
});