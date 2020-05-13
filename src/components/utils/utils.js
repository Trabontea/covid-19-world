export const DateLocale = (value) => {
  const arrInit = value.split(('T'));
  const arr = arrInit[0].split('-');
  let cutOut = arr.splice(0,1)[0];
  arr.splice(1,0, cutOut);
  return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

export const format = num => {
  return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
};

export const twoDecimals =(value) => {
  return value.toFixed(2)
};

// export const sum = (...args) => {
//   return args.reduce((totalSum,currentValue) => totalSum + currentValue, 0 );
// };

export const add = (a,b) => a + b;