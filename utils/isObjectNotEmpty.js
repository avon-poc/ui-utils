const isObjectNotEmpty = (obj) => {
if( (typeof obj === "object" || typeof obj === 'function') && (obj !== null) )
{
    return true;
}
}

export default isObjectNotEmpty;