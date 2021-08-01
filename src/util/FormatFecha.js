function FormatFecha(date) {

    var strFecha = '',
        dtFecha = new Date(date);

    var YYYY = dtFecha.getFullYear(),
        DD = dtFecha.getMonth() + 1,
        MM = dtFecha.getDate(),
        HH = dtFecha.getHours(),
        mm = dtFecha.getMinutes(),
        ss = dtFecha.getSeconds();

    if (DD < 10) {
        DD = `0${DD}`;
    }
    if (MM < 10) {
        MM = `0${MM}`;
    }

    if (HH < 10) {
        HH = `0${HH}`;
    }
    if (mm < 10) {
        mm = `0${mm}`;
    }
    if (ss < 10) {
        ss = `0${ss}`;
    }

    strFecha = DD + '/' + MM + '/' + YYYY + ' ' + HH + ':' + mm + ':' + ss;

    return strFecha;


}

export default FormatFecha;