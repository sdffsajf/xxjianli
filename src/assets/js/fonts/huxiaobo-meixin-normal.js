import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('huxiaobo-meixin-normal.ttf', font)
this.addFont('huxiaobo-meixin-normal.ttf', 'huxiaobo-meixin', 'normal')
}
jsPDF.API.events.push(['addFonts', callAddFont])