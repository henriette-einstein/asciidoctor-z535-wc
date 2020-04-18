import { css, html, LitElement } from './web_modules/lit-element.js'

class Signalpanel extends LitElement {
  static get properties () {
    return {
      target: { type: String },
      lang: { type: String },
      color: { type: String }
    }
  }

  static get styles () {
    return css`
@charset "UTF-8";
span.ansi-safety-instructions, span.ansi-notice, span.ansi-caution, span.ansi-warning, span.ansi-danger {
  display: inline-block;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}
span.ansi-style-border.ansi-safety-instructions, span.ansi-style-border.ansi-notice, span.ansi-style-border.ansi-caution, span.ansi-style-border.ansi-warning, span.ansi-style-border.ansi-danger {
  border: 1px solid black;
}
span.ansi-style-bw.ansi-safety-instructions, span.ansi-style-bw.ansi-notice, span.ansi-style-bw.ansi-caution, span.ansi-style-bw.ansi-warning, span.ansi-style-bw.ansi-danger {
  color: black;
  background-color: white;
}
span.ansi-style-wb.ansi-safety-instructions, span.ansi-style-wb.ansi-notice, span.ansi-style-wb.ansi-caution, span.ansi-style-wb.ansi-warning, span.ansi-style-wb.ansi-danger {
  color: white;
  background-color: black;
}
span.ansi-alert-white-solid::before, span.ansi-alert-white::before, span.ansi-alert-black-solid::before, span.ansi-alert-black::before, span.ansi-danger::before, span.ansi-caution::before, span.ansi-warning::before {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  content: " ";
  width: 1em;
  height: 1em;
  display: inline-block;
  margin-right: 0.2em;
}
span.ansi-caution::before, span.ansi-warning::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' id='svg815' width='323.51999' height='276.79999' viewBox='0 0 323.51999 276.79999' sodipodi:docname='ansi-black.svg' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata821'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs819'/%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview817' showgrid='false' inkscape:zoom='4.4364164' inkscape:cx='170.06826' inkscape:cy='139.46631' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg815'/%3E %3Cpath style='fill:%23000000;stroke-width:0.31999999' d='m 28.959999,262.17266 c -4.268351,-0.59618 -7.777472,-2.28831 -10.222784,-4.92954 -3.651222,-3.94376 -3.745016,-8.21779 -0.329579,-15.01834 1.944101,-3.87093 126.234884,-211.913774 129.895824,-217.424781 3.40911,-5.131909 5.37828,-7.137477 8.42507,-8.580806 1.9225,-0.910728 2.45796,-1.019194 5.03146,-1.019194 2.57351,0 3.10897,0.108466 5.03147,1.019194 3.81033,1.805031 5.92605,4.261232 11.52594,13.380806 9.95773,16.216447 125.75441,210.542161 126.99599,213.119991 2.05145,4.25935 2.63697,7.12356 2.00769,9.82106 -0.56497,2.42181 -1.25822,3.5784 -3.27631,5.46609 -1.76359,1.64963 -3.83905,2.79102 -6.6222,3.64184 -1.825,0.55791 -7.31726,0.58317 -134.70258,0.61969 -73.039993,0.0209 -133.231991,-0.0223 -133.759991,-0.096 z M 168.35318,250.26625 c 4.31127,-1.62818 7.77168,-5.20369 9.09724,-9.39984 0.64432,-2.03966 0.78957,-3.16102 0.78957,-6.0957 0,-5.71652 -1.14969,-8.94728 -4.33616,-12.18507 -3.30481,-3.35803 -6.32229,-4.47061 -12.14384,-4.47759 -3.06729,-0.004 -4.29074,0.13658 -6.07999,0.69703 -4.05102,1.26891 -7.89768,4.90797 -9.46901,8.95796 -0.56604,1.45895 -0.74258,2.70237 -0.85791,6.04261 -0.12842,3.71932 -0.06,4.4926 0.59146,6.68712 1.53658,5.176 6.23716,9.44538 11.45406,10.40335 2.67299,0.49083 8.94143,0.13041 10.95458,-0.62987 z m 0.0854,-54.51942 c 6.95413,-22.08019 12.14851,-45.59356 14.27951,-64.63905 1.17456,-10.49735 1.33431,-13.91692 1.50832,-32.286628 0.12392,-13.081513 0.0648,-19.51374 -0.20312,-22.08 -1.37524,-13.175215 -6.02632,-22.496805 -13.90591,-27.869938 -2.43702,-1.661811 -6.68431,-3.418694 -8.28202,-3.425833 -1.5874,-0.0071 -6.05056,1.813641 -8.46507,3.453302 -6.98006,4.740067 -11.27459,12.391475 -13.41516,23.901314 -0.5398,2.902455 -0.59464,5.044781 -0.58975,23.04 0.006,20.315043 0.15831,24.052813 1.44869,35.437983 2.16701,19.11966 7.30578,42.33575 14.27277,64.48201 l 1.13253,3.6 h 5.54062 5.54063 z' id='path4518' inkscape:connector-curvature='0'/%3E %3C/svg%3E");
}
span.ansi-style-wb.ansi-caution::before, span.ansi-style-wb.ansi-warning::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' id='svg815' width='323.51999' height='276.79999' viewBox='0 0 323.51999 276.79999' sodipodi:docname='ansi-white.svg' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata821'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs819'/%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview817' showgrid='false' inkscape:zoom='4.4364164' inkscape:cx='130.17119' inkscape:cy='139.46631' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg815'/%3E %3Cpath style='fill:%23ffffff;stroke-width:0.31999999;fill-opacity:1' d='m 28.959999,262.17266 c -4.268351,-0.59618 -7.777472,-2.28831 -10.222784,-4.92954 -3.651222,-3.94376 -3.745016,-8.21779 -0.329579,-15.01834 1.944101,-3.87093 126.234884,-211.913774 129.895824,-217.424781 3.40911,-5.131909 5.37828,-7.137477 8.42507,-8.580806 1.9225,-0.910728 2.45796,-1.019194 5.03146,-1.019194 2.57351,0 3.10897,0.108466 5.03147,1.019194 3.81033,1.805031 5.92605,4.261232 11.52594,13.380806 9.95773,16.216447 125.75441,210.542161 126.99599,213.119991 2.05145,4.25935 2.63697,7.12356 2.00769,9.82106 -0.56497,2.42181 -1.25822,3.5784 -3.27631,5.46609 -1.76359,1.64963 -3.83905,2.79102 -6.6222,3.64184 -1.825,0.55791 -7.31726,0.58317 -134.70258,0.61969 -73.039993,0.0209 -133.231991,-0.0223 -133.759991,-0.096 z M 168.35318,250.26625 c 4.31127,-1.62818 7.77168,-5.20369 9.09724,-9.39984 0.64432,-2.03966 0.78957,-3.16102 0.78957,-6.0957 0,-5.71652 -1.14969,-8.94728 -4.33616,-12.18507 -3.30481,-3.35803 -6.32229,-4.47061 -12.14384,-4.47759 -3.06729,-0.004 -4.29074,0.13658 -6.07999,0.69703 -4.05102,1.26891 -7.89768,4.90797 -9.46901,8.95796 -0.56604,1.45895 -0.74258,2.70237 -0.85791,6.04261 -0.12842,3.71932 -0.06,4.4926 0.59146,6.68712 1.53658,5.176 6.23716,9.44538 11.45406,10.40335 2.67299,0.49083 8.94143,0.13041 10.95458,-0.62987 z m 0.0854,-54.51942 c 6.95413,-22.08019 12.14851,-45.59356 14.27951,-64.63905 1.17456,-10.49735 1.33431,-13.91692 1.50832,-32.286628 0.12392,-13.081513 0.0648,-19.51374 -0.20312,-22.08 -1.37524,-13.175215 -6.02632,-22.496805 -13.90591,-27.869938 -2.43702,-1.661811 -6.68431,-3.418694 -8.28202,-3.425833 -1.5874,-0.0071 -6.05056,1.813641 -8.46507,3.453302 -6.98006,4.740067 -11.27459,12.391475 -13.41516,23.901314 -0.5398,2.902455 -0.59464,5.044781 -0.58975,23.04 0.006,20.315043 0.15831,24.052813 1.44869,35.437983 2.16701,19.11966 7.30578,42.33575 14.27277,64.48201 l 1.13253,3.6 h 5.54062 5.54063 z' id='path4518' inkscape:connector-curvature='0' inkscape:export-xdpi='300' inkscape:export-ydpi='300'/%3E %3C/svg%3E");
}
span.ansi-danger::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' id='svg815' width='323.51999' height='276.79999' viewBox='0 0 323.51999 276.79999' sodipodi:docname='ansi-white.svg' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata821'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs819'/%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview817' showgrid='false' inkscape:zoom='4.4364164' inkscape:cx='130.17119' inkscape:cy='139.46631' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg815'/%3E %3Cpath style='fill:%23ffffff;stroke-width:0.31999999;fill-opacity:1' d='m 28.959999,262.17266 c -4.268351,-0.59618 -7.777472,-2.28831 -10.222784,-4.92954 -3.651222,-3.94376 -3.745016,-8.21779 -0.329579,-15.01834 1.944101,-3.87093 126.234884,-211.913774 129.895824,-217.424781 3.40911,-5.131909 5.37828,-7.137477 8.42507,-8.580806 1.9225,-0.910728 2.45796,-1.019194 5.03146,-1.019194 2.57351,0 3.10897,0.108466 5.03147,1.019194 3.81033,1.805031 5.92605,4.261232 11.52594,13.380806 9.95773,16.216447 125.75441,210.542161 126.99599,213.119991 2.05145,4.25935 2.63697,7.12356 2.00769,9.82106 -0.56497,2.42181 -1.25822,3.5784 -3.27631,5.46609 -1.76359,1.64963 -3.83905,2.79102 -6.6222,3.64184 -1.825,0.55791 -7.31726,0.58317 -134.70258,0.61969 -73.039993,0.0209 -133.231991,-0.0223 -133.759991,-0.096 z M 168.35318,250.26625 c 4.31127,-1.62818 7.77168,-5.20369 9.09724,-9.39984 0.64432,-2.03966 0.78957,-3.16102 0.78957,-6.0957 0,-5.71652 -1.14969,-8.94728 -4.33616,-12.18507 -3.30481,-3.35803 -6.32229,-4.47061 -12.14384,-4.47759 -3.06729,-0.004 -4.29074,0.13658 -6.07999,0.69703 -4.05102,1.26891 -7.89768,4.90797 -9.46901,8.95796 -0.56604,1.45895 -0.74258,2.70237 -0.85791,6.04261 -0.12842,3.71932 -0.06,4.4926 0.59146,6.68712 1.53658,5.176 6.23716,9.44538 11.45406,10.40335 2.67299,0.49083 8.94143,0.13041 10.95458,-0.62987 z m 0.0854,-54.51942 c 6.95413,-22.08019 12.14851,-45.59356 14.27951,-64.63905 1.17456,-10.49735 1.33431,-13.91692 1.50832,-32.286628 0.12392,-13.081513 0.0648,-19.51374 -0.20312,-22.08 -1.37524,-13.175215 -6.02632,-22.496805 -13.90591,-27.869938 -2.43702,-1.661811 -6.68431,-3.418694 -8.28202,-3.425833 -1.5874,-0.0071 -6.05056,1.813641 -8.46507,3.453302 -6.98006,4.740067 -11.27459,12.391475 -13.41516,23.901314 -0.5398,2.902455 -0.59464,5.044781 -0.58975,23.04 0.006,20.315043 0.15831,24.052813 1.44869,35.437983 2.16701,19.11966 7.30578,42.33575 14.27277,64.48201 l 1.13253,3.6 h 5.54062 5.54063 z' id='path4518' inkscape:connector-curvature='0' inkscape:export-xdpi='300' inkscape:export-ydpi='300'/%3E %3C/svg%3E");
}
span.ansi-style-bw.ansi-danger::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' stroke-miterlimit='10' font-weight='normal' font-style='normal' font-size='12' version='1.1' id='svg9' sodipodi:docname='warning_sign_original.svg' width='323.43741' height='276.75' style='font-style:normal;font-weight:normal;font-size:12px;font-family:Dialog;color-interpolation:auto;fill:%23000000;fill-opacity:1;stroke:%23000000;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata13'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview11' showgrid='false' fit-margin-top='0' fit-margin-left='0' fit-margin-right='0' fit-margin-bottom='0' inkscape:zoom='2.36' inkscape:cx='36.7812' inkscape:cy='347.125' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg9'/%3E %3C!--Unicode Character %22WARNING SIGN%22 (U+26A0)--%3E %3Cdefs id='genericDefs'/%3E %3Cg id='g7' transform='translate(-13.2188,-120.375)'%3E %3Cg id='g5'%3E %3Cpath d='m 47.8125,397.125 q -13.2187,0 -20.25,-2.5312 -7.0313,-2.5313 -10.6875,-7.4532 -3.6562,-4.9218 -3.6562,-10.8281 0,-3.0937 1.5468,-8.5781 1.5469,-5.4844 6.0469,-13.9219 L 145.125,145.6875 q 3.9375,-6.4687 9.1406,-13.3594 5.2032,-6.8906 10.8282,-9.4219 5.625,-2.5312 9.8437,-2.5312 4.2187,0 9.8437,2.5312 5.625,2.5313 10.8282,9.4219 5.2031,6.8907 9.1406,13.3594 l 124.3125,208.125 q 4.5,8.4375 6.0469,13.9219 1.5468,5.4844 1.5468,8.5781 0,5.9063 -3.6562,10.8281 -3.6562,4.9219 -10.6875,7.4532 -7.0313,2.5312 -20.25,2.5312 z m 0,-14.625 h 254.25 q 7.5937,0 10.9687,-1.5469 3.375,-1.5469 5.625,-4.3593 2.25,-2.8126 1.8282,-7.0313 -0.4219,-4.2187 -4.3594,-10.6875 L 191.8125,150.75 q -2.8125,-4.6406 -5.2734,-8.1562 -2.461,-3.5157 -5.3438,-5.2735 -2.8828,-1.7578 -6.2578,-1.7578 -3.375,0 -6.2578,1.7578 -2.8828,1.7578 -5.3438,5.3438 -2.4609,3.5859 -5.2734,8.0859 L 33.75,358.875 q -3.9375,6.4688 -4.3594,10.6875 -0.4218,4.2187 1.8282,7.0313 2.25,2.8124 5.625,4.3593 3.375,1.5469 10.9687,1.5469 z m 127.125,-10.6875 q -5.3437,0 -9,-2.1094 -3.6563,-2.1093 -5.7656,-5.7656 -2.1094,-3.6563 -2.1094,-9 0,-5.3437 2.1094,-9 2.1093,-3.6563 5.7656,-5.7656 3.6563,-2.1094 9,-2.1094 5.3437,0 9,2.1094 3.6563,2.1093 5.7656,5.7656 2.1094,3.6563 2.1094,9 0,5.3437 -2.1094,9 -2.1093,3.6563 -5.7656,5.7656 -3.6563,2.1094 -9,2.1094 z m -5.625,-51.75 q -16.875,-52.875 -17.1563,-92.5313 v -27.8437 q 2.25,-28.9687 22.7813,-34.3125 20.5313,5.3438 22.7813,34.3125 v 27.8437 q -0.2813,39.6563 -17.1563,92.5313 z' id='path3' inkscape:connector-curvature='0' style='stroke:none'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
}
span.ansi-alert-black::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' stroke-miterlimit='10' font-weight='normal' font-style='normal' font-size='12' version='1.1' id='svg9' sodipodi:docname='warning_sign_original.svg' width='323.43741' height='276.75' style='font-style:normal;font-weight:normal;font-size:12px;font-family:Dialog;color-interpolation:auto;fill:%23000000;fill-opacity:1;stroke:%23000000;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata13'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview11' showgrid='false' fit-margin-top='0' fit-margin-left='0' fit-margin-right='0' fit-margin-bottom='0' inkscape:zoom='2.36' inkscape:cx='36.7812' inkscape:cy='347.125' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg9'/%3E %3C!--Unicode Character %22WARNING SIGN%22 (U+26A0)--%3E %3Cdefs id='genericDefs'/%3E %3Cg id='g7' transform='translate(-13.2188,-120.375)'%3E %3Cg id='g5'%3E %3Cpath d='m 47.8125,397.125 q -13.2187,0 -20.25,-2.5312 -7.0313,-2.5313 -10.6875,-7.4532 -3.6562,-4.9218 -3.6562,-10.8281 0,-3.0937 1.5468,-8.5781 1.5469,-5.4844 6.0469,-13.9219 L 145.125,145.6875 q 3.9375,-6.4687 9.1406,-13.3594 5.2032,-6.8906 10.8282,-9.4219 5.625,-2.5312 9.8437,-2.5312 4.2187,0 9.8437,2.5312 5.625,2.5313 10.8282,9.4219 5.2031,6.8907 9.1406,13.3594 l 124.3125,208.125 q 4.5,8.4375 6.0469,13.9219 1.5468,5.4844 1.5468,8.5781 0,5.9063 -3.6562,10.8281 -3.6562,4.9219 -10.6875,7.4532 -7.0313,2.5312 -20.25,2.5312 z m 0,-14.625 h 254.25 q 7.5937,0 10.9687,-1.5469 3.375,-1.5469 5.625,-4.3593 2.25,-2.8126 1.8282,-7.0313 -0.4219,-4.2187 -4.3594,-10.6875 L 191.8125,150.75 q -2.8125,-4.6406 -5.2734,-8.1562 -2.461,-3.5157 -5.3438,-5.2735 -2.8828,-1.7578 -6.2578,-1.7578 -3.375,0 -6.2578,1.7578 -2.8828,1.7578 -5.3438,5.3438 -2.4609,3.5859 -5.2734,8.0859 L 33.75,358.875 q -3.9375,6.4688 -4.3594,10.6875 -0.4218,4.2187 1.8282,7.0313 2.25,2.8124 5.625,4.3593 3.375,1.5469 10.9687,1.5469 z m 127.125,-10.6875 q -5.3437,0 -9,-2.1094 -3.6563,-2.1093 -5.7656,-5.7656 -2.1094,-3.6563 -2.1094,-9 0,-5.3437 2.1094,-9 2.1093,-3.6563 5.7656,-5.7656 3.6563,-2.1094 9,-2.1094 5.3437,0 9,2.1094 3.6563,2.1093 5.7656,5.7656 2.1094,3.6563 2.1094,9 0,5.3437 -2.1094,9 -2.1093,3.6563 -5.7656,5.7656 -3.6563,2.1094 -9,2.1094 z m -5.625,-51.75 q -16.875,-52.875 -17.1563,-92.5313 v -27.8437 q 2.25,-28.9687 22.7813,-34.3125 20.5313,5.3438 22.7813,34.3125 v 27.8437 q -0.2813,39.6563 -17.1563,92.5313 z' id='path3' inkscape:connector-curvature='0' style='stroke:none'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
}
span.ansi-alert-black-solid::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' id='svg815' width='323.51999' height='276.79999' viewBox='0 0 323.51999 276.79999' sodipodi:docname='ansi-black.svg' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata821'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs819'/%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview817' showgrid='false' inkscape:zoom='4.4364164' inkscape:cx='170.06826' inkscape:cy='139.46631' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg815'/%3E %3Cpath style='fill:%23000000;stroke-width:0.31999999' d='m 28.959999,262.17266 c -4.268351,-0.59618 -7.777472,-2.28831 -10.222784,-4.92954 -3.651222,-3.94376 -3.745016,-8.21779 -0.329579,-15.01834 1.944101,-3.87093 126.234884,-211.913774 129.895824,-217.424781 3.40911,-5.131909 5.37828,-7.137477 8.42507,-8.580806 1.9225,-0.910728 2.45796,-1.019194 5.03146,-1.019194 2.57351,0 3.10897,0.108466 5.03147,1.019194 3.81033,1.805031 5.92605,4.261232 11.52594,13.380806 9.95773,16.216447 125.75441,210.542161 126.99599,213.119991 2.05145,4.25935 2.63697,7.12356 2.00769,9.82106 -0.56497,2.42181 -1.25822,3.5784 -3.27631,5.46609 -1.76359,1.64963 -3.83905,2.79102 -6.6222,3.64184 -1.825,0.55791 -7.31726,0.58317 -134.70258,0.61969 -73.039993,0.0209 -133.231991,-0.0223 -133.759991,-0.096 z M 168.35318,250.26625 c 4.31127,-1.62818 7.77168,-5.20369 9.09724,-9.39984 0.64432,-2.03966 0.78957,-3.16102 0.78957,-6.0957 0,-5.71652 -1.14969,-8.94728 -4.33616,-12.18507 -3.30481,-3.35803 -6.32229,-4.47061 -12.14384,-4.47759 -3.06729,-0.004 -4.29074,0.13658 -6.07999,0.69703 -4.05102,1.26891 -7.89768,4.90797 -9.46901,8.95796 -0.56604,1.45895 -0.74258,2.70237 -0.85791,6.04261 -0.12842,3.71932 -0.06,4.4926 0.59146,6.68712 1.53658,5.176 6.23716,9.44538 11.45406,10.40335 2.67299,0.49083 8.94143,0.13041 10.95458,-0.62987 z m 0.0854,-54.51942 c 6.95413,-22.08019 12.14851,-45.59356 14.27951,-64.63905 1.17456,-10.49735 1.33431,-13.91692 1.50832,-32.286628 0.12392,-13.081513 0.0648,-19.51374 -0.20312,-22.08 -1.37524,-13.175215 -6.02632,-22.496805 -13.90591,-27.869938 -2.43702,-1.661811 -6.68431,-3.418694 -8.28202,-3.425833 -1.5874,-0.0071 -6.05056,1.813641 -8.46507,3.453302 -6.98006,4.740067 -11.27459,12.391475 -13.41516,23.901314 -0.5398,2.902455 -0.59464,5.044781 -0.58975,23.04 0.006,20.315043 0.15831,24.052813 1.44869,35.437983 2.16701,19.11966 7.30578,42.33575 14.27277,64.48201 l 1.13253,3.6 h 5.54062 5.54063 z' id='path4518' inkscape:connector-curvature='0'/%3E %3C/svg%3E");
}
span.ansi-alert-white::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' stroke-miterlimit='10' font-weight='normal' font-style='normal' font-size='12' version='1.1' id='svg9' sodipodi:docname='warning_sign_inkscape_white.svg' width='323.43741' height='276.75' style='font-style:normal;font-weight:normal;font-size:12px;font-family:Dialog;color-interpolation:auto;fill:%23000000;fill-opacity:1;stroke:%23000000;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata13'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview11' showgrid='false' fit-margin-top='0' fit-margin-left='0' fit-margin-right='0' fit-margin-bottom='0' inkscape:zoom='2.36' inkscape:cx='-38.2188' inkscape:cy='347.125' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg9'/%3E %3C!--Unicode Character %22WARNING SIGN%22 (U+26A0)--%3E %3Cdefs id='genericDefs'/%3E %3Cg id='g7' transform='translate(-13.2188,-120.375)' style='fill:%23ffffff;fill-opacity:1'%3E %3Cg id='g5' style='fill:%23ffffff;fill-opacity:1'%3E %3Cpath d='m 47.8125,397.125 q -13.2187,0 -20.25,-2.5312 -7.0313,-2.5313 -10.6875,-7.4532 -3.6562,-4.9218 -3.6562,-10.8281 0,-3.0937 1.5468,-8.5781 1.5469,-5.4844 6.0469,-13.9219 L 145.125,145.6875 q 3.9375,-6.4687 9.1406,-13.3594 5.2032,-6.8906 10.8282,-9.4219 5.625,-2.5312 9.8437,-2.5312 4.2187,0 9.8437,2.5312 5.625,2.5313 10.8282,9.4219 5.2031,6.8907 9.1406,13.3594 l 124.3125,208.125 q 4.5,8.4375 6.0469,13.9219 1.5468,5.4844 1.5468,8.5781 0,5.9063 -3.6562,10.8281 -3.6562,4.9219 -10.6875,7.4532 -7.0313,2.5312 -20.25,2.5312 z m 0,-14.625 h 254.25 q 7.5937,0 10.9687,-1.5469 3.375,-1.5469 5.625,-4.3593 2.25,-2.8126 1.8282,-7.0313 -0.4219,-4.2187 -4.3594,-10.6875 L 191.8125,150.75 q -2.8125,-4.6406 -5.2734,-8.1562 -2.461,-3.5157 -5.3438,-5.2735 -2.8828,-1.7578 -6.2578,-1.7578 -3.375,0 -6.2578,1.7578 -2.8828,1.7578 -5.3438,5.3438 -2.4609,3.5859 -5.2734,8.0859 L 33.75,358.875 q -3.9375,6.4688 -4.3594,10.6875 -0.4218,4.2187 1.8282,7.0313 2.25,2.8124 5.625,4.3593 3.375,1.5469 10.9687,1.5469 z m 127.125,-10.6875 q -5.3437,0 -9,-2.1094 -3.6563,-2.1093 -5.7656,-5.7656 -2.1094,-3.6563 -2.1094,-9 0,-5.3437 2.1094,-9 2.1093,-3.6563 5.7656,-5.7656 3.6563,-2.1094 9,-2.1094 5.3437,0 9,2.1094 3.6563,2.1093 5.7656,5.7656 2.1094,3.6563 2.1094,9 0,5.3437 -2.1094,9 -2.1093,3.6563 -5.7656,5.7656 -3.6563,2.1094 -9,2.1094 z m -5.625,-51.75 q -16.875,-52.875 -17.1563,-92.5313 v -27.8437 q 2.25,-28.9687 22.7813,-34.3125 20.5313,5.3438 22.7813,34.3125 v 27.8437 q -0.2813,39.6563 -17.1563,92.5313 z' id='path3' inkscape:connector-curvature='0' style='stroke:none;fill:%23ffffff;fill-opacity:1'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
}
span.ansi-alert-white-solid::before {
  background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!-- Created with Inkscape (http://www.inkscape.org/) --%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' version='1.1' id='svg815' width='323.51999' height='276.79999' viewBox='0 0 323.51999 276.79999' sodipodi:docname='ansi-white.svg' inkscape:version='0.92.2 (5c3e80d, 2017-08-06)'%3E %3Cmetadata id='metadata821'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3E %3Cdc:title/%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs819'/%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='2400' inkscape:window-height='1421' id='namedview817' showgrid='false' inkscape:zoom='4.4364164' inkscape:cx='130.17119' inkscape:cy='139.46631' inkscape:window-x='2391' inkscape:window-y='-9' inkscape:window-maximized='1' inkscape:current-layer='svg815'/%3E %3Cpath style='fill:%23ffffff;stroke-width:0.31999999;fill-opacity:1' d='m 28.959999,262.17266 c -4.268351,-0.59618 -7.777472,-2.28831 -10.222784,-4.92954 -3.651222,-3.94376 -3.745016,-8.21779 -0.329579,-15.01834 1.944101,-3.87093 126.234884,-211.913774 129.895824,-217.424781 3.40911,-5.131909 5.37828,-7.137477 8.42507,-8.580806 1.9225,-0.910728 2.45796,-1.019194 5.03146,-1.019194 2.57351,0 3.10897,0.108466 5.03147,1.019194 3.81033,1.805031 5.92605,4.261232 11.52594,13.380806 9.95773,16.216447 125.75441,210.542161 126.99599,213.119991 2.05145,4.25935 2.63697,7.12356 2.00769,9.82106 -0.56497,2.42181 -1.25822,3.5784 -3.27631,5.46609 -1.76359,1.64963 -3.83905,2.79102 -6.6222,3.64184 -1.825,0.55791 -7.31726,0.58317 -134.70258,0.61969 -73.039993,0.0209 -133.231991,-0.0223 -133.759991,-0.096 z M 168.35318,250.26625 c 4.31127,-1.62818 7.77168,-5.20369 9.09724,-9.39984 0.64432,-2.03966 0.78957,-3.16102 0.78957,-6.0957 0,-5.71652 -1.14969,-8.94728 -4.33616,-12.18507 -3.30481,-3.35803 -6.32229,-4.47061 -12.14384,-4.47759 -3.06729,-0.004 -4.29074,0.13658 -6.07999,0.69703 -4.05102,1.26891 -7.89768,4.90797 -9.46901,8.95796 -0.56604,1.45895 -0.74258,2.70237 -0.85791,6.04261 -0.12842,3.71932 -0.06,4.4926 0.59146,6.68712 1.53658,5.176 6.23716,9.44538 11.45406,10.40335 2.67299,0.49083 8.94143,0.13041 10.95458,-0.62987 z m 0.0854,-54.51942 c 6.95413,-22.08019 12.14851,-45.59356 14.27951,-64.63905 1.17456,-10.49735 1.33431,-13.91692 1.50832,-32.286628 0.12392,-13.081513 0.0648,-19.51374 -0.20312,-22.08 -1.37524,-13.175215 -6.02632,-22.496805 -13.90591,-27.869938 -2.43702,-1.661811 -6.68431,-3.418694 -8.28202,-3.425833 -1.5874,-0.0071 -6.05056,1.813641 -8.46507,3.453302 -6.98006,4.740067 -11.27459,12.391475 -13.41516,23.901314 -0.5398,2.902455 -0.59464,5.044781 -0.58975,23.04 0.006,20.315043 0.15831,24.052813 1.44869,35.437983 2.16701,19.11966 7.30578,42.33575 14.27277,64.48201 l 1.13253,3.6 h 5.54062 5.54063 z' id='path4518' inkscape:connector-curvature='0' inkscape:export-xdpi='300' inkscape:export-ydpi='300'/%3E %3C/svg%3E");
}
span.ansi-danger {
  color: white;
  background-color: #c8102e;
}
span.ansi-danger::after {
  vertical-align: middle;
  content: "DANGER";
}
span.ansi-danger.ansi-lang-de::after {
  content: "GEFAHR";
}
span.ansi-danger.ansi-lang-fr::after {
  content: "DANGER";
}
span.ansi-danger.ansi-lang-es::after {
  content: "PELIGRO";
}
span.ansi-warning {
  color: black;
  background-color: #ff8200;
}
span.ansi-warning::after {
  vertical-align: middle;
  content: "WARNING";
}
span.ansi-warning.ansi-lang-de::after {
  content: "WARNUNG";
}
span.ansi-warning.ansi-lang-fr::after {
  content: "AVERTISSEMENT";
}
span.ansi-warning.ansi-lang-es::after {
  content: "ADVERTENCIA";
}
span.ansi-caution {
  color: black;
  background-color: #ffd100;
}
span.ansi-caution::after {
  vertical-align: middle;
  content: "CAUTION";
}
span.ansi-caution.ansi-lang-de::after {
  content: "VORSICHT";
}
span.ansi-caution.ansi-lang-fr::after {
  content: "ATTENTION";
}
span.ansi-caution.ansi-lang-es::after {
  content: "ATENCION";
}
span.ansi-notice {
  color: white;
  background-color: #0072ce;
}
span.ansi-notice::after {
  vertical-align: middle;
  content: "NOTICE";
}
span.ansi-notice.ansi-lang-de::after {
  content: "HINWEIS";
}
span.ansi-notice.ansi-lang-fr::after {
  content: "AVIS";
}
span.ansi-notice.ansi-lang-es::after {
  content: "AVISO";
}
span.ansi-safety-instructions {
  color: white;
  background-color: #007b5f;
}
span.ansi-safety-instructions::after {
  vertical-align: middle;
  content: "Safety Instructions";
}
span.ansi-safety-instructions.ansi-lang-de::after {
  content: "Sicherheitshinweise";
}
span.ansi-safety-instructions.ansi-lang-fr::after {
  content: "Consignes de Sécurité";
}
span.ansi-safety-instructions.ansi-lang-es::after {
  content: "Instrucciones de Seguridad";
}
`
  }

  render () {
    var text = 'undefined'
    if (this.target === 'danger') {
      text = 'ansi-danger'
    } else if (this.target === 'danger-border') {
      text = 'ansi-danger ansi-style-border'
    } else if (this.target === 'warning') {
      text = 'ansi-warning'
    } else if (this.target === 'warning-border') {
      text = 'ansi-warning ansi-style-border'
    } else if (this.target === 'caution') {
      text = 'ansi-caution'
    } else if (this.target === 'caution-border') {
      text = 'ansi-caution ansi-style-border'
    } else if (this.target === 'notice') {
      text = 'ansi-notice'
    } else if (this.target === 'notice-border') {
      text = 'ansi-notice ansi-style-border'
    } else if (this.target === 'safety') {
      text = 'ansi-safety-instructions'
    } else if (this.target === 'safety-border') {
      text = 'ansi-safety-instructions ansi-style-border'
    } else {
      text = 'ansi-unknown ' + this.target
    }
    if (this.color !== undefined) {
      text += ' ' + 'ansi-style-' + this.color
    }
    if (this.lang !== undefined) {
      text += ' ' + 'ansi-lang-' + this.lang
    }

    return html`<span class="${text}"></span>`
  }
}
customElements.define('x-signalpanel', Signalpanel)
