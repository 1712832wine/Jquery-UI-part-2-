$(document).ready(function() {

    $('.radio').checkboxradio({ icon: false, });
    $('.checkbox').checkboxradio({ icon: false, });
    //--------------------------------------------------------------------
    //SELECTMENU
    //ĐỊNH NGHĨA LẠI HÀM SELECT MENU
    $.widget('custom.selectmenuwithavatar', $.ui.selectmenu, {
        _renderItem: function(ul, item) {
            //MỖI ITEM LÀ MỘT THẺ <LI>
            var li = $('<li>');
            //THÊM CLASS ĐÁNH DẤU DsISABLE VÀO <LI> NẾU CÓ
            if (item.disabled) {
                li.addClass('ui-state-disabled')
            };
            //MỖI THẺ <LI> CHỨA <DIV> LÀM NỘI DUNG
            wrapper = $('<div>', { text: item.label });
            //TRONG THẺ <DIV> CÓ THẺ SPAN LÀM AVARTAR
            $('<span>', {
                style: item.element.attr('dataStyle'),
                'class': item.element.attr('dataClass') + ' ui-icon'
            }).appendTo(wrapper);
            //TRẢ VỀ ITEM TRONG KHI RENDER
            return li.append(wrapper).appendTo(ul);
        }
    });
    //SỬ DỤNG LẠI MENU ĐÃ ĐỊNH NGHĨA
    $('#Select').selectmenuwithavatar();
    //--------------------------------------------------------------------
    //DRAGGABLE
    $('#cur').draggable({});
    //DROPPABLE
    $('#drop').droppable({
        accept: '#cur',
        activate: function() { $(this).css('background-color', 'yellow') },
        over: function() { $(this).css('background-color', 'blue') },
        out: function() { $(this).css('background-color', 'green') },
        drop: function() { $(this).css('background-color', 'grey') },
    });
    //RESIZABLE
    $('#resize').resizable();
    //SORTABLE
    $('#sortable').sortable({
        connectWith: '#sortable2'
    });
    $('#sortable2').sortable({
        connectWith: '#sortable'
    });
    //SELECTABLE
    $('#selectable').selectable({});
    $('#selectable2').selectable({});

})