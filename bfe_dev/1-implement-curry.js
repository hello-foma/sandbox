/**
 * https://bigfrontend.dev/problem/implement-curry
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 * need to return wrapped function
 * wrap must accept from one to three
 * calling wrap func will return func until got all three
 * then call original one with previously passed params
 */
function curry(fn) {
  const isSet = (val) => typeof val !== 'undefined';

  const wrap = function(ctx, args) {
    args.forEach(passed => {
      if(!isSet(ctx.a)) {
        ctx.a = passed;
      } else if(!isSet(ctx.b)) {
        ctx.b = passed;
      } else if(!isSet(ctx.c)) {
        ctx.c = passed;
      }
    })

    if (isSet(ctx.a) && isSet(ctx.b) && isSet(ctx.c)) {
      return fn.apply({}, Object.values(ctx));
    } else {
      return (...args) => wrap({...ctx}, args);
    }
  }

  return (...args) => wrap({}, args);
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}


console.log(curry(join)(1, 2)(3)) // '1_2_3'
console.log(curry(join)(4)(5)(6)) // '4_5_6'
console.log(curry(join)(7,8,9,10)) // '7_8_9'
const curried = curry(join)(11,12);
console.log(curried(13)) // '11_12_13'
console.log(curried(14)) // '11_12_14'

