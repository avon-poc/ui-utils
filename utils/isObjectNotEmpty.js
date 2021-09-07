const isObjectNotEmpty = (obj) => {
if( (typeof obj === "object" && obj.length > 0) )
{
    return true;
}
else {
    return false;
}
}

export default isObjectNotEmpty;