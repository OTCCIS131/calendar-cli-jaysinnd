calendar-cli-jaysinnd



-sort by
-take
-map


EX:
let names = [..]
let manipulatedNames =
  _.chain(names)
   .sortby()
   .take(5)
   .map(_.reverse)
   .value()


MOMENT--------------

moment().range('year')
tip: iterate by months

tip: const moment
           momentrange
           _= require
let year=moment()
	.range('year')
_.foreach(year by('moment'))

----PsuedoCode for important stuff----

create moment range for this year
Itereate over each month
==print Month Name (Centered)
==Print Day headings
==get list of days
==prepend monthly offset
==chunk array of days by 7
==print weeks




-------- Some examples---------------

Array EX
days.forEach(function)
function() {
console.log(...)
}



let year = now.range('year')

for (constant month in year. by('month'))

console.log(month)

--------------------------------------

1 highlight my Birthday
2 calculate # of blanks
3 add two space blanks
4 chunk (7) = [{},{},{}]
5 .map(_.join(week, ' ')