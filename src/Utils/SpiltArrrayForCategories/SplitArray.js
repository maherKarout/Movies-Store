export function splitArray(array = []) {
  let arraEle = [];
  let bigarray = [];

  let widthScreen = window.innerWidth;
  let countCategories = 0;

  if (widthScreen < 600) {
    countCategories = 1;
  } else if (widthScreen < 900) {
    countCategories = 2;
  } else if (widthScreen > 900) {
    countCategories = 6;
  }

  array?.forEach((item, index) => {
    if ((index + 1) % countCategories === 0) {
      arraEle.push(item);
      bigarray.push(arraEle);
      arraEle = [];
    } else {
      arraEle.push(item);
    }
  });
  arraEle.length !== 0 && bigarray.push(arraEle);

  return bigarray;
}
