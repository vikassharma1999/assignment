const moment = require("moment")
let val;

val = moment().format('YYYY-MM-DD')
val = moment().format('YYYY-MM-DD,h:mm:ss a')
val = moment('20050305').format('YYYY-MM-DD, h:mm:ss a')
val = moment().format('d')
val = moment().format('[The year is] YYYY')
val = moment('20501031','YYYYMMDD').fromNow()
val = moment().startOf('day').fromNow()
val = moment().endOf('year').fromNow()
val = moment().subtract(5,'days').calendar()
val = moment().add(10,'years').calendar()
console.log(val)