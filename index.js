// Code your solution in this file!
const headQuarters=42

const distanceFromHqInBlocks=(pickUpLocation)=>
{
    if(pickUpLocation < 42)
    {
        return headQuarters-pickUpLocation
    }
    else if (pickUpLocation >= 42) 
    {
        return pickUpLocation-headQuarters
    }
}

const distanceFromHqInFeet=(distance)=> //Passing a parameter of distance to the function
{
    let distanceInBlocks=distanceFromHqInBlocks(distance) //Using the distance parameter to calculate the distance in blocks using the distanceFromHqInBlocks function declared above and storing it in the distanceInBlocks variable

    return distanceInBlocks * 264 //Multiplying the above value by 264 to convert the distance from blocks to feet
}

const distanceTravelledInFeet=(start, destination)=>
{
    let distance= destination - start;

    if(destination < start)
    {
        return Math.abs(distance * 264) //Converting the result from -ve to +ve
    }
    else
    {
        return distance * 264
    }
}

const calculatesFarePrice=(start, destination)=>
{
    let distance=distanceTravelledInFeet(start, destination)
    let farePrice=0;

    if (distance <= 400) 
    {
        farePrice=0;
        return farePrice
    }
    else if (distance > 400 && distance <=2000)
    {
        distance=distance - 400; //Subtracting the first 400 feet since they are free
        farePrice=distance * 0.02
        return farePrice
    }
    else if (distance > 2000 && distance <=2499)
    {
        farePrice=25
        return farePrice
    }
    else if(distance >= 2500)
    {
        return "cannot travel that far"
    }
}
