// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(42 - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(beg, end){
  return Math.abs((end - beg) * 264);
}

function calculatesFarePrice(start, destination){
  if((destination - start) >= 400 && (destination - start) <= 2000){
    return (destination - start) * .02;
  }
}
